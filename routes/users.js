import express from 'express';
import User from '../model/Users.schema.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import axios from 'axios';

import { verifyToken } from '../middleware/authMiddlleware.js';

const router = express.Router();

// login route
router.post('/login', async (req, res) => {
  const { number, password, turnstileToken } = req.body;

  if (!turnstileToken) {
    return res.status(400).json({ msg: 'CAPTCHA verification failed' });
  }

  try {
    // Verify Turnstile token with Cloudflare
    const verifyResponse = await axios.post(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      new URLSearchParams({
        secret: '0x4AAAAAAA1VaJbl0PgBlGzd-RXrV4WFoQ0', // Your Turnstile secret key
        response: turnstileToken,
      }),
    );

    if (!verifyResponse.data.success) {
      return res.status(400).json({ msg: 'CAPTCHA verification failed' });
    }

    if (!number || !password) {
      return res.status(400).json({ msg: 'All fields must be filled' });
    }

    const user = await User.findOne({ number });
    if (!user) {
      return res.status(400).json({ msg: 'User does not exist' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Generate a JWT
    const token = jwt.sign(
      {
        firstName: user.firstName,
        lastName: user.lastName,
        number: user.number,
        role: user.role,
        id: user._id,
      },
      process.env.JWT_ACCESS_SECRET,
      // { expiresIn: process.env.JWT_EXPIRES_IN }, // Options
    );

    const { password: _, ...userWithoutPassword } = user._doc;
    res.status(200).json({ accessToken: token, user: userWithoutPassword });

    // res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

//signup route
router.post('/signup', verifyToken, async (req, res) => {
  const { firstName, lastName, number, password, role } = req.body;

  try {
    if (!firstName || !lastName || !number || !password || !role) {
      return res.status(400).json({ msg: 'All fields must be filled' });
    }

    const userExists = await User.findOne({ number });
    if (userExists) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName,
      lastName,
      number,
      password: hashedPassword,
      role,
    });

    const users = await User.find().select('-password');
    res.status(201).json({ users });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

//get all users
router.get('/', verifyToken, async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

//delete a user
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    const users = await User.find();
    res.status(204).json({ users });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

export default router;
