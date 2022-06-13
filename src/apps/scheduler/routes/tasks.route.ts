import { Request, Response, Router } from "express";
import { body } from "express-validator";

import Action from "../../../context/tasks/domain/Action";
import Type from "../../../context/tasks/domain/Type";
import { TaskCreatorController } from "../controllers/TaskCreatorController";
import validateRequestSchemaMiddleware from "../middleware/validateRequestSchema";
import { TransformEnumToStringKeysArray } from "./../utils/TransformEnumToStringKeys";

export const register = (router: Router, prefix: string) => {
  const taskCreatorController = new TaskCreatorController();

  const typeEnumKeys = TransformEnumToStringKeysArray.transform(Type);
  const actionEnumKeys = TransformEnumToStringKeysArray.transform(Action);

  const taskRequestSchema = [
    body("id").isUUID(),
    body("user").isString(),
    body("crop").isUUID(),
    body("sensor").isUUID(),
    body("action").isIn(actionEnumKeys),
    body("type").isIn(typeEnumKeys),
    body("pattern").isString(),
  ];

  router.post(
    `${prefix}/task/`,
    taskRequestSchema,
    validateRequestSchemaMiddleware,
    (req: Request, res: Response) => taskCreatorController.run(req, res)
  );
};
