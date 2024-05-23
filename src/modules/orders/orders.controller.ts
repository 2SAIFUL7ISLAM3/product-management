// orders.controller.ts
import { Request, Response } from 'express';
import { orderService } from './orders.service';
import { OrderSchema } from './orderValidation';
import { z } from 'zod';

const createOrder = async (req: Request, res: Response) => {
  try {

    const orderData = OrderSchema.parse(req.body);

    const result = await orderService.createNewOrder(orderData);

    res.json({
      success: true,
      message: 'Order created successfully!',
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

    
    res.status(400).json({
      success: false,
      message: error || 'An error occurred while creating the order',
    });
  }
};
  
  const getAllOrders = async (req: Request, res: Response) => {
    try {
      const results = await orderService.getAllOrders();
      res.json({
        success: true,
        message: 'Orders retrieved successfully!',
        data: results,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error || 'An error occurred while retrieving orders',
      });
    }
  };
  
  const getOrdersByEmail = async (req: Request, res: Response) => {
    try {
      const { email } = req.query;
      if (!email) {
        return res.status(400).json({
          success: false,
          message: 'Email query parameter is required',
        });
      }
      const results = await orderService.getOrdersByEmail(email as string);
      res.json({
        success: true,
        message: 'Orders retrieved successfully!',
        data: results,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message || 'An error occurred while retrieving orders by email',
      });
    }
  };


export const orderControllers = {
  createOrder,
  getAllOrders,
  getOrdersByEmail,
};
