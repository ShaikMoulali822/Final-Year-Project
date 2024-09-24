import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  startDate: Date,
  endDate: Date,
  totalDays: Number,
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  people: Number,
  totalPrice: {
    type: Number,
    required: true,
  },
  bookAt: {
    type: Date,
    default: new Date(),
  },
  tourName: {
    type: mongoose.Types.ObjectId,
    ref: "Tour",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
