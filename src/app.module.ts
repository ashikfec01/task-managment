import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './modules/auth/auth.module';
import { AuthService } from './modules/auth/auth.service';
import { TasksModule } from './modules/tasks/tasks.module';
import { PostService } from './post.service';
import { PrismaService } from './prisma.service';
import { UserService } from './user.service';

@Module({
  imports: [TasksModule, AuthModule],
  controllers: [AppController],
  providers: [PrismaService, UserService, PostService, AuthService]
})
export class AppModule { }
