import { Types } from "mongoose";

// orders.interface.ts
export type TOrder = {
    email: string;
    ProductId: Types.ObjectId;
    price: number;
    quantity: number;
  };
  