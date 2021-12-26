import { Injectable } from '@nestjs/common';
import { Auth, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) { }
  async createUser(data: Prisma.AuthCreateInput): Promise<Auth> {
    return this.prisma.auth.create({
      data,
    });
  }
  // create(createAuthDto: CreateAuthDto) {
  //   return 'This action adds a new auth';
  // }

  findAll() {
    return `This action returns all auth`;
  }

  async getUserById(authWhereUniqueInput: Prisma.AuthWhereUniqueInput): Promise<Auth | undefined> {
    return this.prisma.auth.findUnique({
      where: authWhereUniqueInput
    })
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
