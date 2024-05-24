import { Router, Request, Response } from "express";
// import { PrismaClient } from "@prisma/client";
import { PrismaClient } from '../../prisma/generated/client/'

export const crudRoute = Router();
const prisma = new PrismaClient();

crudRoute.post("/get/:model", async (req: Request, res: Response) => {
  try {
    const model: any = req.params.model as keyof typeof prisma;

    if (!(model in prisma)) {
      return res
        .status(400)
        .json({ status: false, message: "Invalid model name" });
    }

    const result = await (prisma[model as keyof typeof prisma] as any).findMany(
      {
        where: {
          OR: [{ [req.body.searchField]: { contains: req.body.searchTerm, mode: "insensitive" } }],
        },
        orderBy: {
          ...req.body.orderBy,
        },
      }
    );
    res.status(200).json({ status: true, data: result });
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal server error" });
  }
});

crudRoute.post("/create/:model", async (req: Request, res: Response) => {
  try {
    const model: any = req.params.model as keyof typeof prisma;

    if (!(model in prisma)) {
      return res
        .status(400)
        .json({ status: false, message: "Invalid model name" });
    }

    const result = await (prisma[model as keyof typeof prisma] as any).create({
      data: req.body,
    });

    res.status(200).json({ status: true, data: result });
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal server error" });
  }
});

crudRoute.post("/update/:model/:id", async (req: Request, res: Response) => {
  try {
    const model: any = req.params.model as keyof typeof prisma;

    if (!(model in prisma)) {
      return res
        .status(400)
        .json({ status: false, message: "Invalid model name" });
    }

    const result = await (prisma[model as keyof typeof prisma] as any).update({
      where: { id: +req.params.id },
      data: req.body,
    });

    res.status(200).json({ status: true, data: result });
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal server error" });
  }
});

crudRoute.delete("/delete/:model/:id", async (req: Request, res: Response) => {
  try {
    const model: any = req.params.model as keyof typeof prisma;

    if (!(model in prisma)) {
      return res
        .status(400)
        .json({ status: false, message: "Invalid model name" });
    }

    const result = await (prisma[model as keyof typeof prisma] as any).delete({
      where: { id: +req.params.id },
    });
    res.status(200).json({ status: true, data: result });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// dashboard count

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

crudRoute.get("/count/:model", async (req: Request, res: Response) => {
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
            ? `%${(percentIncrease / 10).toFixed(2)}`
            : `%${percentIncrease.toFixed(2)}`,
      },
    });
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal server error" });
  }
});

crudRoute.get("/programBy/:model", async (req: Request, res: Response) => {
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
    res.status(500).json({ status: false, message: "Internal server error" });
  }
});

crudRoute.post("/search", async (req: Request, res: Response) => {
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
