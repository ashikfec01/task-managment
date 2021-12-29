import { Injectable } from '@nestjs/common';
import { Prisma, Task } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
// import { Task, TaskStatus } from '../_models/taskInterface.model';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}
  async createTask(data: Prisma.TaskCreateInput): Promise<Task> {
    return this.prisma.task.create({
      data,
    });
  }
  // async createTask(taskWhereUniqueInput: Prisma.TaskWhereUniqueInput): Promise<Task | null> {
  //   return this.prisma.task.findUnique({
  //     where: taskWhereUniqueInput,
  //   });
  // }
  // createTask(createTaskDto: CreateTaskDto): Task {
  //   const { title, description } = createTaskDto;
  //   const task: Task = {
  //     id: uuidv4(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   };
  //   this.tasks.push(task);
  //   return task;
  // }

  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }

  // getTaskWithFilter(filterDto: GetTaskFilterDto): Task[] {
  //   const { status, search } = filterDto;
  //   let tasks = this.getAllTasks();
  //   if (status) {
  //     tasks = tasks.filter(task => task.status === status);
  //   }

  //   if (search) {
  //     tasks = tasks.filter(task => task.title.includes(search) || task.description.includes(search))
  //   }
  //   return tasks;
  // }

  // getTaskById(id: string) {
  //   const found = this.tasks.find(task => task.id === id);
  //   if (!found) {
  //     throw new NotFoundException(`Task with id ${id} not found`)
  //   }
  //   return found;
  // }

  // updateTaskStatus(id: string, status: TaskStatus) {
  //   const task = this.getTaskById(id);
  //   task.status = status;
  //   return task;
  // }

  // removeTaskById(id: string): void {
  //   const found = this.getTaskById(id);
  //   this.tasks = this.tasks.filter(task => task.id !== found.id);
  // }
}
