import mongoose from 'mongoose';

const shopA2Schema = new mongoose.Schema(
  {
    dateIn: {
      type: String,
    },
    dateOut: {
      type: String,
    },
    cashier: {
      type: [String],
    },
    acountant: {
      type: String,
    },
    checkedBy: {
      type: String,
    },
    status: {
      type: String,
    },
    cash: {
      type: [Number],
    },
    credit: {
      type: Array,
    },
    received: {
      type: Array,
    },
    stock: {
      type: Array,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('ShopA2Shift', shopA2Schema);