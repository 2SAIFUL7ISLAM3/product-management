// orderValidation.ts
import { z } from 'zod';

export const OrderSchema = z.object({
  email: z.string().email(),
  ProductId: z.string().length(24, 'Invalid product ID'), 
  price: z.number().positive(),
  quantity: z.number().int().positive(),
});