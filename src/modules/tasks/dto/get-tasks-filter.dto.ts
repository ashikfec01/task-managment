import { TaskStatus } from "../_models/taskInterface.model";

export class GetTaskFilterDto {
    status: TaskStatus;
    search: string;
}