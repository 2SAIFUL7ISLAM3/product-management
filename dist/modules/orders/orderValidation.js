"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSchema = void 0;
// orderValidation.ts
const zod_1 = require("zod");
exports.OrderSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    ProductId: zod_1.z.string().length(24, 'Invalid product ID'),
    price: zod_1.z.number().positive(),
    quantity: zod_1.z.number().int().positive(),
});
