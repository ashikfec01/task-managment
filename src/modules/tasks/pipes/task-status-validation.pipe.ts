import { BadRequestException, PipeTransform } from "@nestjs/common";
// import { TaskStatus } from "../_models/taskInterface.model";

export class TaskStatusValidationPipe implements PipeTransform {
    readonly allowedStatuses = [
        0, 1, 2
    ];
    transform(value: any) {

        value = value.toUpperCase();

        if (!this.isStatusValid(value)) {
            throw new BadRequestException(`${value} is an invalid status`)
        }
        return value;
    }
    private isStatusValid(status: any) {
        const idx = this.allowedStatuses.indexOf(status);
        return idx !== -1;
    }
}