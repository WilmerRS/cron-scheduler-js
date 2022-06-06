import { Application, Request, Response } from "express";

export const loadApiEndpoints = (app: Application): void => {
  app.get("/api", (req: Request, res: Response) => {
    console.log("API endpoint hit at", new Date().toString());
    return res.status(200).send({ status: "ok" });
  });
};
