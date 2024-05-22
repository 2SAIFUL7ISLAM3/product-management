import { Request, Response } from "express";
import { productService } from "./products.service";

const productController = async (req: Request, res: Response) => {
  const productData = req.body;

  const result = await productService.createProduct(productData);
  res.json({
    success: true,
    message: "Product is created successfully",
    data: result,
  });
};

const getAllProductController = async (req: Request, res: Response) => {
  const result = await productService.getAllProduct();
  res.json({
    success: true,
    message: "Product retieved successfully",
    data: result,
  });
};
const getSingleProductController = async (req: Request, res: Response) => {
  const { productId } = req.params;

  const result = await productService.getSingleProduct(productId);
  res.json({
    success: true,
    message: "Product is retieved successfully",
    data: result,
  });
};

const updateProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const updateData = req.body;
  const result = await productService.updateProduct(productId, updateData);
  res.json({
    success: true,
    message: "Product updated successfully",
    data: result,
  });
};

const deleteProduct = async (req: Request, res: Response) => {
    const { productId } = req.params;
    const result = await productService.deleteProduct(productId);
    if (result) {
      res.json({
        success: true,
        message: 'Product deleted successfully',
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }
};

const searchProducts = async (req: Request, res: Response) => {
    const { query } = req.query as { query: string };
    const result = await productService.searchProducts(query);
    res.json({
      success: true,
      message: 'Products retrieved successfully',
      data: result,
    });
  };

export const productControllers = {
  productController,
  getAllProductController,
  getSingleProductController,
  updateProduct,
  deleteProduct,
  searchProducts,
};
