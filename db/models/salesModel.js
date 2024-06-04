import mongoose, { Schema } from "mongoose";

const purchaseSchema = new Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  mrp: {
    type: Number,
    required: true,
  },
});

const salesSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  purchase: [purchaseSchema],
  total: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const salesModel =
  mongoose.models.sales || mongoose.model("sales", salesSchema);
export default salesModel;
