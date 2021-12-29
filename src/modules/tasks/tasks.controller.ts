import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Task } from '@prisma/client';
import { CreateTaskDto } from './dto/create-task.dto';
// import { Task, TaskStatus } from './_models/taskInterface.model';
import { TasksService } from './_services/tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(createTaskDto);
  }
  // @Post()
  // @UsePipes(ValidationPipe)
  // createTask(@Body() createTaskDto: CreateTaskDto) {
  //   return this.tasksService.createTask(createTaskDto);
  // }

  // @Get()
  // getTasks(@Query(ValidationPipe) filterDto: GetTaskFilterDto): Task[] {
  //   if (Object.keys(filterDto).length) {
  //     return this.tasksService.getTaskWithFilter(filterDto);
  //   } else {
  //     return this.tasksService.getAllTasks();
  //   }
  // }

  // @Get('/:id')
  // getTaskById(@Param('id') id: string) {
  //   return this.tasksService.getTaskById(id);
  // }

  // @Patch('/:id/status')
  // updateTaskStatus(
  //   @Param('id') id: string,
  //   @Body('status', TaskStatusValidationPipe) status: TaskStatus
  // ): Task {
  //   return this.tasksService.updateTaskStatus(id, status);
  // }

  // @Delete('/:id')
  // removeTaskById(@Param('id') id: string) {
  //   this.tasksService.removeTaskById(id);
  // }
}
