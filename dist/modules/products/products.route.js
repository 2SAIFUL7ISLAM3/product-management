"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const products_controller_1 = require("./products.controller");
const router = express_1.default.Router();
router.post("/", products_controller_1.productControllers.productController);
router.get("/", products_controller_1.productControllers.getAllProductController);
router.get("/:productId", products_controller_1.productControllers.getSingleProductController);
router.put('/:productId', products_controller_1.productControllers.updateProduct);
router.delete('/:productId', products_controller_1.productControllers.deleteProduct);
router.get('/searchTerm', products_controller_1.productControllers.searchProducts);
exports.productsRoutes = router;
