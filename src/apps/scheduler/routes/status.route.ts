import { Request, Response, Router } from "express";

import { StatusGetController } from "../controllers/StatusGetController";

export const register = (router: Router, prefix: string) => {
  const statusController = new StatusGetController();
  router.get(`${prefix}/status/`, (req: Request, res: Response) =>
    statusController.run(req, res)
  );
};
