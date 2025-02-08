import express from "express";
import { test } from "../controllers/user.controller.js";

const testRouter = express.Router();

testRouter.get('/test', test);

export default testRouter;