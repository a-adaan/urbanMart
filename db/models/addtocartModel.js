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

const addToCartSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  purchase: [purchaseSchema],
});

const addtocartModel =
  mongoose.models.addtocarts || mongoose.model("addtocarts", addToCartSchema);

export default addtocartModel;
