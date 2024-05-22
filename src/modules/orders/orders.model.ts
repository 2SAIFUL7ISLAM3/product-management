// orders.model.ts
import mongoose, { Schema, Model } from 'mongoose';
import { TOrder } from './orders.interface';


const orderSchema = new Schema<TOrder>({
  email: { type: String, required: true },
  ProductId: { type:Schema.Types.ObjectId, required: true, ref: 'ProductModel' },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

export const OrderModel: Model<TOrder> = mongoose.model('Order', orderSchema);
