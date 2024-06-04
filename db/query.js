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
    const products = await productModel
      .find({
        category: name,
        _id: { $ne: new mongoose.Types.ObjectId(skipId) },
      })
      .limit(4)
      .lean();
    return arrayIdConverter(products);
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
