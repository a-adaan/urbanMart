import mongoose, { Schema } from "mongoose";

const detailsSchema = new Schema({
  material: {
    type: String,
    required: true,
  },
  dimensions: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
});

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: [
    {
      type: String,
      required: true,
    },
  ],
  price: {
    type: Number,
    required: true,
  },
  discount_price: {
    type: Number,
    required: true,
  },
  reviewsNumber: {
    type: Number,
    required: true,
  },
  ratings: {
    type: Number,
    required: true,
  },
  availability: {
    type: Boolean,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  details: {
    type: detailsSchema,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  sizes: [
    {
      type: String,
      required: true,
    },
  ],
  colors: [
    {
      type: String,
      required: true,
    },
  ],
  stock: {
    type: Number,
    required: true,
  },
  soldCounts: {
    type: Number,
    required: true,
  },
});

const productModel =
  mongoose.models.products || mongoose.model("products", productSchema);
export default productModel;
