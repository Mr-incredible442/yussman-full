import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { fileURLToPath } from 'url';

// import { verifyToken } from './middleware/authMiddlleware.js';

// route imports
import usersRoutes from './routes/users.js';
import suppliersRoutes from './routes/supplier.js';
import restaurantRoutes from './routes/restaurant.js';
import storeRoutes from './routes/store.js';
import employeeRoutes from './routes/employee.js';
import shopA1Routes from './routes/shopA1.js';
import shopA2Routes from './routes/shopA2.js';
import shopBRoutes from './routes/shopB.js';
import shopWRoutes from './routes/shopW.js';
import shopCRoutes from './routes/shopC.js';
import registerRoutes from './routes/register.js';
import creditRoutes from './routes/credit.js';

//chinsali
import chinsaliRestaurantRoutes from './routes/chinsaliRestaurant.js';
import chinsaliStoreRoutes from './routes/chinsaliStore.js';
import chinsaliRegisterRoutes from './routes/chinsaliRegister.js';

//chansa
import chansaRestaurantRoutes from './routes/chansaRestaurant.js';
import chansaStoreRoutes from './routes/chansaStore.js';
import chansaRegisterRoutes from './routes/chansaRegister.js';

//socket stuff

dotenv.config();
const app = express();

//sockets
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'https://yussman.net/',
    // origin: '*',
  },
});

import { socketConnect } from './routes/supplier.js';

app.set('io', io);
io.on('connection', (socket) => {
  socketConnect(io);
  socket.on('disconnect', () => {
    //console.log(socket.id, 'disconnected');
  });
});

// mongoose connection
mongoose.set('strictQuery', true);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {})
  .catch((err) => {
    console.log(err);
  });

//middlewares
app.use((req, res, next) => {
  if (req.headers.host === 'yussman-62ryj.ondigitalocean.app') {
    return res.redirect(301, `https://yussman.net${req.url}`);
  }
  next();
});

app.use(
  cors({
    origin: 'https://yussman.net/',
    // origin: '*',
  }),
);
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'yussman-client', 'dist')));

//serenje
app.use('/api/users', usersRoutes);
app.use('/api/goat', suppliersRoutes);
app.use('/api/restaurant', restaurantRoutes);
app.use('/api/store', storeRoutes);
app.use('/api/employee', employeeRoutes);
app.use('/api/shopa1', shopA1Routes);
app.use('/api/shopa2', shopA2Routes);
app.use('/api/shopb', shopBRoutes);
app.use('/api/shopw', shopWRoutes);
app.use('/api/shopc', shopCRoutes);
app.use('/api/register', registerRoutes);
app.use('/api/credit', creditRoutes);

//chinsali
app.use('/api/chinsali/restaurant', chinsaliRestaurantRoutes);
app.use('/api/chinsali/store', chinsaliStoreRoutes);
app.use('/api/chinsali/register', chinsaliRegisterRoutes);

//chansa
app.use('/api/chansa/restaurant', chansaRestaurantRoutes);
app.use('/api/chansa/store', chansaStoreRoutes);
app.use('/api/chansa/register', chansaRegisterRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'yussman-client', 'dist', 'index.html'));
});

server.listen(process.env.PORT, () => {});
