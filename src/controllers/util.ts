import { Router, Request, Response } from "express";
// import { PrismaClient } from "@prisma/client";
import { PrismaClient } from '../../prisma/generated/client/'

import * as argon2 from "argon2";

export const utilRoute = Router();

const prisma = new PrismaClient();

// dashboard
const getCurrentMonth = () => {
  const start = new Date();
  start.setDate(1);
  start.setHours(0, 0, 0, 0);

  const end = new Date(start);
  end.setMonth(start.getMonth() + 1);

  return { start, end };
};

const getPreviousMonth = () => {
  const start = new Date();
  start.setMonth(start.getMonth() - 1);
  start.setDate(1);
  start.setHours(0, 0, 0, 0);

  const end = new Date(start);
  end.setMonth(start.getMonth() + 1);

  return { start, end };
};

utilRoute.get("/count/:model", async (req: Request, res: Response) => {
  try {
    const { start: currentStart, end: currentEnd } = getCurrentMonth();
    const { start: previousStart, end: previousEnd } = getPreviousMonth();

    let currentCount, previousCount;

    const model: any = req.params.model as keyof typeof prisma;

    if (!(model in prisma)) {
      return res
        .status(400)
        .json({ status: false, message: "Invalid model name" });
    }

    currentCount = await (prisma[model as keyof typeof prisma] as any).count({
      where: {
        createdat: {
          gte: currentStart,
          lt: currentEnd,
        },
      },
    });

    previousCount = await (prisma[model as keyof typeof prisma] as any).count({
      where: {
        createdat: {
          gte: previousStart,
          lt: previousEnd,
        },
      },
    });

    let percentIncrease = 0;

    if (previousCount > 0) {
      percentIncrease = ((currentCount - previousCount) / previousCount) * 100;
    } else if (previousCount === 0 && currentCount > 0) {
      percentIncrease = 100;
    } else {
      percentIncrease = 0;
    }

    res.status(200).json({
      status: true,
      data: {
        currentCount,
        percentIncrease:
          percentIncrease > 100
            ? (percentIncrease / 10).toFixed(2)
            : percentIncrease.toFixed(2),
      },
    });
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal server error" });
  }
});

utilRoute.get("/programBy/:model", async (req: Request, res: Response) => {
  try {
    const model: any = req.params.model as keyof typeof prisma;

    if (!(model in prisma)) {
      return res
        .status(400)
        .json({ status: false, message: "Invalid model name" });
    }

    const result = await (prisma[model as keyof typeof prisma] as any).findMany(
      {
        select: {
          name: true,
          _count: {
            select: { program: true },
          },
        },
      }
    );

    res.status(200).json({ status: true, data: result });
  } catch (error) {
    res.status(500).json({ status: false, message: "INternal server rror" });
  }
});

// search
utilRoute.post("/search", async (req: Request, res: Response) => {
  try {
    const model: any = req.body.model as keyof typeof prisma;
    const field: any = req.body.field;
    const searchTerm: any = req.body.searchTerm;

    if (!(model in prisma)) {
      return res
        .status(400)
        .json({ status: false, message: "Invalid model name" });
    }

    const result = await (prisma[model as keyof typeof prisma] as any).findMany(
      {
        where: {
          OR: [{ [field]: { contains: searchTerm, mode: "insensitive" } }],
        },
      }
    );
    res.status(200).json({ status: true, data: result });
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal server error" });
  }
});

// signup
utilRoute.post("/signup", async (req: Request, res: Response) => {
  try {
    const result = await prisma.user.findMany({
      where: {
        email: req.body.email,
      },
    });

    if (result.length > 0) {
      return res
        .status(200)
        .json({ status: false, data: "email already taken by others." });
    } else {
      const hash = await argon2.hash(req.body.password);
      req.body.password = hash;

      const result: any = await prisma.user.create({
        data: req.body,
      });

      delete result.password;

      res.status(200).json({ status: true, data: result });
    }
  } catch (error) {
    res.status(500).json({ status: false, message: error });
  }
});

utilRoute.post("/login", async (req: Request, res: Response) => {
  try {
    const result: any = await prisma.user.findMany({
      where: {
        email: req.body.email,
      },
    });

    if (result.length > 0) {
      if (await argon2.verify(result[0].password, req.body.password)) {
        delete result[0].password;

        res.status(200).json({ status: true, data: result });
      } else {
        res.status(200).json({ status: false, message: "incorrect password." });
      }
    } else {
      res.status(200).json({ status: false, message: "incorrect email." });
    }
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal server error" });
  }
});
