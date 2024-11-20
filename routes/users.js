import express from 'express';
import User from '../model/Users.schema.js';

const router = express.Router();

router.post('/login', async (req, res) => {
  const { number, password } = req.body;

  if (!number) {
    return res.status(400).json({ msg: 'All fields must be filled' });
  }

  if (!password) {
    return res.status(400).json({ msg: 'All fields must be filled' });
  }

  try {
    const user = await User.findOne({ number });

    if (!user) {
      return res.status(400).json({ msg: 'User does not exist' });
    }

    if (user.password !== password) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

//signup route
router.post('/signup', async (req, res) => {
  const { firstName, lastName, number, password, role } = req.body;

  try {
    if (!firstName || !lastName || !number || !password || !role) {
      return res.status(400).json({ msg: 'All fields must be filled' });
    }

    const userExists = await User.findOne({ number });
    if (userExists) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    const user = await User.create({
      firstName,
      lastName,
      number,
      password,
      role,
    });

    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

//get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

//delete a user
router.delete('/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

export default router;
