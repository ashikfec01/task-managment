import { Auth, Prisma } from '.prisma/client';
import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class UniqueVerification implements PipeTransform {
  constructor(
    private authService: AuthService,
    private prismaService: PrismaService,
  ) {}
  transform(value) {
    if (value > 0)
      throw new BadRequestException(`${value} is an invalid status`);
  }
  async verifyUsername(user): Promise<Auth[] | undefined> {
    console.log('find user name', user);
    const _users = await this.prismaService.auth.findMany({
      where: { username: user },
    });
    return _users;
  }
}
