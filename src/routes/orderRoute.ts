import express, { Request, Response, Router } from "express";
import { order,remove } from "../controller/order";
import authenticateToken from "../middleware/authMiddleware";

const orderRouter:Router = express.Router()

// to order
orderRouter.post("/add/:id",authenticateToken,order)
orderRouter.delete("/remove/:id",authenticateToken,remove)

export default orderRouter