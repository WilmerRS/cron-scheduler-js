import agenda from "../../../../agenda";
import { Task } from "../../domain/Task";
import { TaskRepository } from "../../domain/TaskRepository";

export class AgendaTaskRepository implements TaskRepository {
  save(task: Task): Promise<void> {
    agenda.define(task.id.toString(), async (job: any, done: any) => {
      console.log(`Task ${task.id} is running`);
    });

    agenda.start();
    return agenda.every("1 minutes", task.id.toString());
  }
}
