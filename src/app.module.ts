import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { AuthService } from './modules/auth/_services/auth.service';
import { TasksModule } from './modules/tasks/tasks.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [TasksModule, AuthModule],
  // controllers: [AppController],
  providers: [PrismaService, AuthService]
})
export class AppModule { }
