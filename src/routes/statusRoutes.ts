import express from "express";
import { PrismaClient } from "../generated/prisma";

const statusRouter = express.Router();
const prisma = new PrismaClient();

statusRouter.get("/api/v1/status", async (_req, res) => {
  const updatedAt = new Date().toISOString();

  const databaseServerVersionResult = await prisma.$queryRaw<
    { server_version: string }[]
  >`SHOW server_version;`;
  const databaseServerVersionValue =
    databaseServerVersionResult[0].server_version;

  const databaseMaxConnectionsResult = await prisma.$queryRaw<
    { max_connections: string }[]
  >`SHOW max_connections;`;
  const databaseMaxConnectionsValue =
    databaseMaxConnectionsResult[0].max_connections;

  const databaseOpenedConnectionsResult = await prisma.$queryRaw<
    { count: number }[]
  >`SELECT count(*) as count FROM pg_stat_activity;`;
  const databaseOpenedConnectionsValue = Number(
    databaseOpenedConnectionsResult[0].count,
  );
  res.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: databaseServerVersionValue,
        max_connections: parseInt(databaseMaxConnectionsValue),
        opened_connections: databaseOpenedConnectionsValue,
      },
    },
  });
});

export default statusRouter;
