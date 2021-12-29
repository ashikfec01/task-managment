import { Injectable } from '@nestjs/common';
import { Auth, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { UpdateAuthDto } from '../dto/update-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService, // private jwtService: JwtService,
  ) {}

  async createUser(data): Promise<Auth> {
    return this.prisma.auth.create({
      data,
    });
  }

  // async signIn(data: Prisma.AuthFindUniqueArgs): Promise<{ accessToken: string}> {
  //   const username = await this.
  // }
  // create(createAuthDto: CreateAuthDto) {
  //   return 'This action adds a new auth';
  // }

  findAll() {
    return `This action returns all auth`;
  }

  async getUserById(
    authWhereUniqueInput: Prisma.AuthWhereUniqueInput,
  ): Promise<Auth | undefined> {
    return this.prisma.auth.findUnique({
      where: authWhereUniqueInput,
    });
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  async remove(authWhereUniqueInput: Prisma.AuthWhereUniqueInput) {
    console.log('delete success', authWhereUniqueInput);

    await this.prisma.auth.delete({ where: authWhereUniqueInput });
  }
}
