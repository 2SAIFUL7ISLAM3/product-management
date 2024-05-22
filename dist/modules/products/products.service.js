"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productService = void 0;
const products_model_1 = require("./products.model");
const createProduct = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.ProductModel.create(product);
    return result;
});
const getAllProduct = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.ProductModel.find();
    return result;
});
const getSingleProduct = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.ProductModel.findOne({ _id });
    return result;
});
const updateProduct = (_id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.ProductModel.findByIdAndUpdate(_id, updateData);
    return result;
});
const deleteProduct = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedProduct = yield products_model_1.ProductModel.findByIdAndDelete(_id);
        return deletedProduct;
    }
    catch (error) {
        throw new Error(`Failed to delete product: ${error}`);
    }
});
const searchProducts = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const regex = new RegExp(query, 'i');
        const results = yield products_model_1.ProductModel.find({
            $or: [
                { name: regex },
                { description: regex },
                { category: regex },
                { tags: regex }
            ]
        }).exec();
        return results;
    }
    catch (error) {
        throw new Error(`Failed to search products: ${error}`);
    }
});
exports.productService = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    searchProducts,
};
