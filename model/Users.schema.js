import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    number: { type: String },
    password: { type: String },
    role: { type: String },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('User', userSchema);
