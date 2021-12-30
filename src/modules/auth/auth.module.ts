import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { AuthController } from './auth.controller';
import { UniqueVerification } from './pipes/unique.pipe';
import { AuthEncryptionService } from './_services/auth-encryption.service';
import { AuthService } from './_services/auth.service';
// import { JWT_MODULE_OPTIONS } from '@nestjs/jwt/dist/jwt.constants';
export const jwtConstants = {
  secret: 'secretKey',
};
@Module({
  controllers: [AuthController],
  // imports: [JwtModule],
  providers: [
    AuthService,
    PrismaService,
    AuthEncryptionService,
    UniqueVerification,
    // JwtService,
    // Jwt
    // JWT_MODULE_OPTIONS,
  ],
})
export class AuthModule {}
