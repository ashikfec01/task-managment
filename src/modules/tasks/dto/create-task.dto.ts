import { TaskStatus } from "../_models/taskInterface.model";

export class CreateTaskDto {
    title: string;
    description: string;
    status: TaskStatus;
}
