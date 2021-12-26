import { IsIn, IsNotEmpty, IsOptional } from "class-validator";
// import { TaskStatus } from "../_models/taskInterface.model";

export class GetTaskFilterDto {
    @IsOptional()
    @IsIn([0, 1, 2])
    status: Enumerator;

    @IsOptional()
    @IsNotEmpty()
    search: string;
}