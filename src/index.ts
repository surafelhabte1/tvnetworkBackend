// import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";
import { json } from "body-parser";
import dotenv from "dotenv";

import { crudRoute } from "./controllers/crud";
import { utilRoute } from "./controllers/util";
import cors from "cors";

export const routes = express.Router();
dotenv.config();

const app = express();
// Enable CORS for all routes
app.use(cors());

// Handle preflight requests
app.options("*", cors());

routes.use(crudRoute);
routes.use(utilRoute);

// const prisma = new PrismaClient();
// async function main() {}

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     await prisma.$disconnect();
//     process.exit(1);
//   });

app.get("/lovers", async (req: Request, res: Response) => {
  res.status(200).json({ status: true, data: "lovers" });
});

app.use("/", routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

export default app;
