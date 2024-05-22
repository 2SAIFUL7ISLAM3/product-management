"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderSchema = void 0;
// orderValidation.ts
const zod_1 = require("zod");
exports.orderSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    ProductId: zod_1.z.string(),
    price: zod_1.z.number(),
    quantity: zod_1.z.number(),
});
