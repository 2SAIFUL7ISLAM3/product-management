// orderValidation.ts
import { z } from 'zod';

export const orderSchema = z.object({
  email: z.string().email(),
  ProductId: z.string(),
  price: z.number(),
  quantity: z.number(),
});
