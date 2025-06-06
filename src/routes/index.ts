import express from "express";
import statusRouter from "./statusRoutes";

const router = express.Router();

router.use(statusRouter);

export default router;
