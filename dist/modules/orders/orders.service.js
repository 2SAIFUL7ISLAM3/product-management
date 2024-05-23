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
exports.orderService = void 0;
const orders_model_1 = require("./orders.model");
const products_model_1 = require("../products/products.model");
const createNewOrder = (order) => __awaiter(void 0, void 0, void 0, function* () {
    // Reduce the quantity of the ordered product in inventory
    const product = yield products_model_1.ProductModel.findById(order.ProductId);
    if (!product) {
        throw new Error('Product not found');
    }
    if (product.inventory.quantity < order.quantity) {
        throw new Error('Insufficient stock');
    }
    // Update inventory
    product.inventory.quantity -= order.quantity;
    product.inventory.inStock = product.inventory.quantity > 0;
    yield product.save();
    // Create the order
    const result = yield orders_model_1.OrderModel.create(order);
    return result;
});
const getAllOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield orders_model_1.OrderModel.find();
    return results;
});
const getOrdersByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield orders_model_1.OrderModel.find({ email });
    return results;
});
exports.orderService = {
    createNewOrder,
    getAllOrders,
    getOrdersByEmail,
};
