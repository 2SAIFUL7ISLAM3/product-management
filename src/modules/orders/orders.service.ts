// orders.service.ts
import { TOrder } from './orders.interface';
import { OrderModel } from './orders.model';
import {ProductModel} from '../products/products.model';

const createOrder = async (order: TOrder) => {
  const result = await OrderModel.create(order);
  return result;
};

const getAllOrders = async () => {
    const results = await OrderModel.find();
    return results;
  };

  const getOrdersByEmail = async (email: string) => {
    const results = await OrderModel.find({ email });
    return results;
  };



  const createNewOrder = async (order: TOrder) => {
    const { ProductId, quantity } = order;
  
    // Reduce the quantity of the ordered product in inventory
    const product = await ProductModel.findById(ProductId);
    if (!product) {
      throw new Error('Product not found');
    }
  
    if (product.inventory.quantity < quantity) {
      throw new Error('Insufficient stock');
    }
  
    product.inventory.quantity -= quantity;
    product.inventory.inStock = product.inventory.quantity > 0;
  
    await product.save();
  
    // Create the order
    const result = await OrderModel.create(order);
    return result;
  };
  

export const orderService = {
  createOrder,
  getAllOrders,
  getOrdersByEmail,
  createNewOrder,
};
