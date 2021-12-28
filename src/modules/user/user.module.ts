import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserController } from './user.controller';
// import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [PrismaService]
})
export class UserModule { }
