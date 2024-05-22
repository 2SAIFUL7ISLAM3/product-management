"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersRoutes = void 0;
// orders.route.ts
const express_1 = __importDefault(require("express"));
const orders_controller_1 = require("./orders.controller");
const router = express_1.default.Router();
router.post('/', orders_controller_1.orderControllers.createOrder);
router.get('/', orders_controller_1.orderControllers.getAllOrders);
router.get('/email', orders_controller_1.orderControllers.getOrdersByEmail);
exports.ordersRoutes = router;
