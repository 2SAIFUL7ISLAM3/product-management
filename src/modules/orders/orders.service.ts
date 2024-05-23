// orders.service.ts
import { TOrder } from './orders.interface';
import { OrderModel } from './orders.model';
import {ProductModel} from '../products/products.model';


const createNewOrder = async (order: TOrder) => {

  // Reduce the quantity of the ordered product in inventory
  const product = await ProductModel.findById(order.ProductId);

  if (!product) {
    throw new Error('Product not found');
  }

  if (product.inventory.quantity < order.quantity) {
    throw new Error('Insufficient stock');
  }


// Update inventory
  product.inventory.quantity -= order.quantity;
  product.inventory.inStock = product.inventory.quantity > 0;

  await product.save();

  // Create the order
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



export const orderService = {
  createNewOrder,
  getAllOrders,
  getOrdersByEmail,
  
};
