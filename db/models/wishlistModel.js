import mongoose, { Schema } from "mongoose";

const wishlistSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  productId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  ],
});

const wishlistModel =
  mongoose.models.wishlists || mongoose.model("wishlists", wishlistSchema);

export default wishlistModel;
