import express, { Router } from "express";

import { login,register } from "../controller/auth";

const authRouter: Router = express.Router();

// register
authRouter.post("/register",register);

// login
authRouter.post("/login",login)

export default authRouter;
 
