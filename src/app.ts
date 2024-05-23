import express, { Application } from 'express';
import cors from 'cors';
import { productsRoutes } from './modules/products/products.route';
import { ordersRoutes } from './modules/orders/orders.route';
const app:Application = express()

//parser

app.use(express.json())
app.use(cors())


app.use('/api/products',productsRoutes);
app.use('/api/orders', ordersRoutes);

export default app;