// orders.route.ts
import express from 'express';
import { orderControllers } from './orders.controller';

const router = express.Router();

router.post('/', orderControllers.createOrder);
router.get('/', orderControllers.getAllOrders);
router.get('/email', orderControllers.getOrdersByEmail);

export const ordersRoutes = router;
