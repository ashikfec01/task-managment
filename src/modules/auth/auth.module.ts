import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AuthController } from './auth.controller';
import { AuthEncryptionService } from './_services/auth-encryption.service';
import { AuthService } from './_services/auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService, AuthEncryptionService]
})
export class AuthModule { }
