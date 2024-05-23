import express, { Request, Response } from "express";
import { json } from "body-parser";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

import { crudRoute } from "./controllers/crud";
import { utilRoute } from "./controllers/util";
import cors from "cors";

export const routes = express.Router();
dotenv.config();

const app = express();
app.use(json());

// Use CORS middleware
app.use(cors());

routes.use(crudRoute);
routes.use(utilRoute);

const prisma = new PrismaClient();
async function main() {}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

app.use("/", routes);

app.get("/lala", async (req: Request, res: Response) => {
  try {
    res.status(200).json({ status: true, data: "lovers" });
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal server error" });
  }
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

export default app;
