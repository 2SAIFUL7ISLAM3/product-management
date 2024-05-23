import { Request, Response } from "express";
import { productService } from "./products.service";
import { z } from "zod";
import { ProductSchema } from "./productValidation";

const productController = async (req: Request, res: Response) => {

  try {
    // Validate incoming data
    const productData = ProductSchema.parse(req.body);

    const result = await productService.createProduct(productData);
    res.json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (error) {

    
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: error.errors,
      });
    }

  
    res.status(500).json({
      success: false,
      message: error.message || 'An error occurred while creating the product',
    });
  }
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
