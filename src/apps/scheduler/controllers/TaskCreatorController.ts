import { Request, Response } from "express";
import httpStatus from "http-status";

import { TaskCreator } from "./../../../context/tasks/application/TaskCreator";
import { AgendaTaskRepository } from "./../../../context/tasks/architecture/persistence/AgendaTaskRepository";
import { Controller } from "./Controller";

export class TaskCreatorController implements Controller {
  async run(req: Request, res: Response) {
    const { id, user, crop, sensor, action, type, pattern } = req.body;

    const agendaTaskRepository = new AgendaTaskRepository();
    const taskCreator = new TaskCreator(agendaTaskRepository);

    taskCreator.run({
      id,
      user,
      crop,
      sensor,
      action,
      type,
      pattern,
    });

    res.status(httpStatus.CREATED).send();
  }
}
