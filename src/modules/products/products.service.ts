import { TProduct } from "./products.interface";
import { ProductModel } from "./products.model";

const createProduct = async (product: TProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProduct = async () => {
  const result = await ProductModel.find();
  return result;
};

const getSingleProduct = async (_id: string) => {
  const result = await ProductModel.findOne({ _id });
  return result;
};

const updateProduct = async (_id: string, updateData: Partial<TProduct>) => {
  try {
    const result = await ProductModel.findByIdAndUpdate(_id, updateData, { new: true });
    return result;
  } catch (error) {
    throw new Error(`Failed to update product: ${error.message}`);
  }
};

const deleteProduct = async (_id: string) => {
  try {
    const deletedProduct = await ProductModel.findByIdAndDelete(_id);
    return deletedProduct;
  } catch (error) {
    throw new Error(`Failed to delete product: ${error}`);
  }
};


const searchProducts = async (query: string) => {
  try {
    const regex = new RegExp(query, 'i');
    const results = await ProductModel.find({
      $or: [
        { name: regex },
        { description: regex },
        { category: regex },
        { tags: regex }
      ]
    }).exec();
    return results;
  } catch (error) {
    throw new Error(`Failed to search products: ${error}`);
  }
};


export const productService = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
};
