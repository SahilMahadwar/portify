import * as trpcExpress from "@trpc/server/adapters/express";

import cors from "cors";
import { loadEnv } from "load-env";

import express, { Express, Request, Response } from "express";

import { appRouter } from "./root";
import { createTRPCContext } from "./trpc";

import morgan from "morgan";

// Load Env
loadEnv();

// Init Express App
const app: Express = express();

app.use(
  cors({
    credentials: true,
  })
);

// Body parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
} else {
  app.use(morgan("dev")); // use short
}

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TRPC + TypeScript Server");
});

app.use(
  "/api/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext: createTRPCContext,
  })
);

// 404 Endpoint
app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err: Error, promise) => {
  console.log(`Error: ${err.message}`);

  // Close server and exit process
  server.close(() => process.exit(1));
});
