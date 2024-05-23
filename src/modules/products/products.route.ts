import express from "express";
import { productControllers } from "./products.controller";

const router = express.Router();


router.post("/",productControllers.productController);
router.get('/', productControllers.searchProducts);
router.get("/",productControllers.getAllProductController)
router.get("/:productId",productControllers.getSingleProductController)
router.put('/:productId', productControllers.updateProduct); 
router.delete('/:productId', productControllers.deleteProduct);


export const productsRoutes = router;