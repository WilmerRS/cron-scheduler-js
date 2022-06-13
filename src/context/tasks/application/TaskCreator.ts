import Action from "../domain/Action";
import { Task } from "../domain/Task";
import { TaskRepository } from "../domain/TaskRepository";
import Type from "../domain/Type";

export class TaskCreator {
  constructor(private readonly taskRepository: TaskRepository) {}

  async run({
    id,
    user,
    crop,
    sensor,
    action,
    type,
    pattern,
  }: {
    id: string;
    user: string;
    crop: string;
    sensor: string;
    action: Action;
    type: Type;
    pattern: string;
  }): Promise<void> {
    const task = new Task({
      id,
      user,
      crop,
      sensor,
      action,
      type,
      pattern,
    });
    return this.taskRepository.save(task);
  }
}
