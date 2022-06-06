import { Application, Request, Response } from "express";
import cron from "node-cron";

export const loadApiEndpoints = (app: Application): void => {
  app.get("/api", (req: Request, res: Response) => {
    console.log("API endpoint hit at", new Date().toString());
    cron.schedule("* * * * *", function () {
      console.log("Running a task every minute:", new Date().toString());
    });
    return res.status(200).send({ status: "ok" });
  });
};
