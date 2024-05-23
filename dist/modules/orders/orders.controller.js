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
exports.orderControllers = void 0;
const orders_service_1 = require("./orders.service");
const orderValidation_1 = require("./orderValidation");
const zod_1 = require("zod");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = orderValidation_1.OrderSchema.parse(req.body);
        const result = yield orders_service_1.orderService.createNewOrder(orderData);
        res.json({
            success: true,
            message: 'Order created successfully!',
            data: result,
        });
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            return res.status(400).json({
                success: false,
                message: 'Validation error',
                errors: error.errors,
            });
        }
        res.status(400).json({
            success: false,
            message: error || 'An error occurred while creating the order',
        });
    }
});
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield orders_service_1.orderService.getAllOrders();
        res.json({
            success: true,
            message: 'Orders retrieved successfully!',
            data: results,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error || 'An error occurred while retrieving orders',
        });
    }
});
const getOrdersByEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.query;
        if (!email) {
            return res.status(400).json({
                success: false,
                message: 'Email query parameter is required',
            });
        }
        const results = yield orders_service_1.orderService.getOrdersByEmail(email);
        res.json({
            success: true,
            message: 'Orders retrieved successfully!',
            data: results,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message || 'An error occurred while retrieving orders by email',
        });
    }
});
exports.orderControllers = {
    createOrder,
    getAllOrders,
    getOrdersByEmail,
};
