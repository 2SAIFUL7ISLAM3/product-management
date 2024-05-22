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
exports.productControllers = void 0;
const products_service_1 = require("./products.service");
const productController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productData = req.body;
    const result = yield products_service_1.productService.createProduct(productData);
    res.json({
        success: true,
        message: "Product is created successfully",
        data: result,
    });
});
const getAllProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_service_1.productService.getAllProduct();
    res.json({
        success: true,
        message: "Product retieved successfully",
        data: result,
    });
});
const getSingleProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const result = yield products_service_1.productService.getSingleProduct(productId);
    res.json({
        success: true,
        message: "Product is retieved successfully",
        data: result,
    });
});
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const updateData = req.body;
    const result = yield products_service_1.productService.updateProduct(productId, updateData);
    res.json({
        success: true,
        message: "Product updated successfully",
        data: result,
    });
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const result = yield products_service_1.productService.deleteProduct(productId);
    if (result) {
        res.json({
            success: true,
            message: 'Product deleted successfully',
            data: result,
        });
    }
    else {
        res.status(404).json({
            success: false,
            message: 'Product not found',
        });
    }
});
const searchProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { query } = req.query;
    const result = yield products_service_1.productService.searchProducts(query);
    res.json({
        success: true,
        message: 'Products retrieved successfully',
        data: result,
    });
});
exports.productControllers = {
    productController,
    getAllProductController,
    getSingleProductController,
    updateProduct,
    deleteProduct,
    searchProducts,
};
