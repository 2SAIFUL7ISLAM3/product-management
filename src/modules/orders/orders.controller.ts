// orders.controller.ts
import { Request, Response } from 'express';
import { orderService } from './orders.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const result = await orderService.createOrder(orderData);
    res.json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (error) {
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
      const { email } = req.query as { email: string };
      const results = await orderService.getOrdersByEmail(email);
      res.json({
        success: true,
        message: 'Orders retrieved successfully!',
        data: results,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error || 'An error occurred while retrieving orders by email',
      });
    }
  };

export const orderControllers = {
  createOrder,
  getAllOrders,
  getOrdersByEmail,
};
