"use server";
import { arrayIdConverter, objIdConverter } from "@/utils/dataConverter";
import { connectToDataBase } from "./dbconnection";
import productModel from "./models/productmodel";
import usermodel from "./models/usermodel";
import salesModel from "./models/salesModel";
import addtocartModel from "./models/addtocartModel";
import wishlistModel from "./models/wishlistModel";
import mongoose from "mongoose";

export async function getNewProduct() {
  await connectToDataBase();
  try {
    const newItem = await productModel.find().limit(4).lean();
    return arrayIdConverter(newItem);
  } catch (e) {
    throw new Error(e);
  }
}

export async function createUser(userData) {
  await connectToDataBase();
  try {
    const user = await usermodel.create(userData);
    return user;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getAllCategory() {
  await connectToDataBase();
  try {
    const categories = await productModel.distinct("category");
    return categories;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getTrandingProduct() {
  await connectToDataBase();
  try {
    const newItem = await productModel
      .find()
      .sort({ ratings: -1 })
      .limit(8)
      .lean();
    return arrayIdConverter(newItem);
  } catch (e) {
    throw new Error(e);
  }
}

export async function getProductById(id) {
  await connectToDataBase();
  try {
    const product = await productModel.findById(id).lean();
    return objIdConverter(product);
  } catch (error) {
    throw new Error(error);
  }
}

export async function getProductByCategory(name, skipId) {
  await connectToDataBase();
  try {
    if (skipId === null) {
      const products = await productModel
        .find({
          category: name,
        })
        .lean();
      return arrayIdConverter(products);
    } else {
      const products = await productModel
        .find({
          category: name,
          _id: { $ne: new mongoose.Types.ObjectId(skipId) },
        })
        .limit(4)
        .lean();
      return arrayIdConverter(products);
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getSearchSuggestions(query) {
  await connectToDataBase();
  try {
    const suggestions = await productModel
      .find({ name: { $regex: query, $options: "i" } }, { name: 1 })
      .limit(5)
      .lean();
    return arrayIdConverter(suggestions);
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getSearchedProducts(
  id,
  categories,
  minPrice,
  maxPrice,
  size
) {
  await connectToDataBase();
  console.log(categories, minPrice, maxPrice);
  try {
    let query = {};

    if (id) {
      query = { _id: { $in: new mongoose.Types.ObjectId(id) } };
    } else if (
      categories.length > 0 &&
      minPrice !== null &&
      maxPrice !== null
    ) {
      query = {
        category: { $in: categories },
        price: { $gte: minPrice, $lte: maxPrice },
      };
    } else if (categories.length > 0) {
      query = { category: { $in: categories } };
    }

    const products = await productModel.find(query).limit(10).lean();
    return arrayIdConverter(products);
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function addToCart(userId, products, quantity = null) {
  await connectToDataBase();

  try {
    // Fetch product by ID
    const isBulkInsert = Array.isArray(products);

    // Find the user's cart
    let cart = await addtocartModel.findOne({ userId });

    if (isBulkInsert) {
      // If products is an array, we are syncing the full cart from localStorage
      const productIds = products.map((p) => p.productId);
      const productDetails = await productModel.find({
        _id: { $in: productIds },
      });

      // Prepare the bulk purchases array with product details
      const bulkPurchases = products.map((p) => {
        const product = productDetails.find((prod) =>
          prod._id.equals(p.productId)
        );
        return {
          productId: p.productId,
          quantity: p.quantity,
          mrp: product.price,
        };
      });

      if (cart) {
        // Concatenate the existing purchase array with the new bulk purchases
        cart.purchase = cart.purchase.concat(bulkPurchases);
      } else {
        // Create a new cart if it doesn't exist
        cart = await addtocartModel.create({
          userId,
          purchase: bulkPurchases,
        });
      }
    } else {
      // Handle single product addition (normal flow)
      const productId = products;
      const product = await productModel.findById(productId);

      // Update the existing cart or create a new one
      if (cart) {
        const purchaseIndex = cart.purchase.findIndex((p) =>
          p.productId.equals(productId)
        );
        if (purchaseIndex > -1) {
          cart.purchase[purchaseIndex].quantity = quantity;
        } else {
          cart.purchase.push({ productId, quantity, mrp: product.price });
        }
      } else {
        // Create a new cart if it doesn't exist
        cart = await addtocartModel.create({
          userId,
          purchase: [{ productId, quantity, mrp: product.price }],
        });
      }
    }

    await cart.save();

    return arrayIdConverter(cart.purchase);
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getWishlistProducts(ids) {
  await connectToDataBase();
  try {
    const objectIds = ids.map((id) => new mongoose.Types.ObjectId(id));
    const products = await productModel
      .find({ _id: { $in: objectIds } })
      .lean();
    return arrayIdConverter(products);
  } catch (error) {
    throw new Error(error.message);
  }
}
export async function getCartProducts(ids) {
  await connectToDataBase();
  try {
    const objectIds = ids.map((id) => new mongoose.Types.ObjectId(id));
    const products = await productModel
      .find({ _id: { $in: objectIds } })
      .select("_id name ratings price")
      .lean();
    return arrayIdConverter(products);
  } catch (error) {
    throw new Error(error.message);
  }
}
