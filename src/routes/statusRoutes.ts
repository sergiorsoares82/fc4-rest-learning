import express from "express";

const statusRouter = express.Router();

statusRouter.get("/api/v1/status", (_req, res) => {
  res.sendStatus(200);
});

export default statusRouter;
