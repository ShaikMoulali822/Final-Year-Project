import mongoose from "mongoose";

const tourSchema = new mongoose.Schema({
  title: String,
  city: String,
  address: String,
  photo: String,
  description: String,
  price: Number,
  maxGroupSize: Number,
  foods: String,
  cloths: String,
  hotels: String,
  review: {
    type: mongoose.Types.ObjectId,
    ref: "Review",
  },
  rating: {
    type: Number,
    required: false,
  },
  tourDate: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export const Tour = mongoose.model("Tour", tourSchema);
export default Tour;
