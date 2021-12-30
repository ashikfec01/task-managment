import { Auth, Prisma } from '.prisma/client';
import {
  BadRequestException,
  Injectable,
  Optional,
  PipeTransform,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class UniqueVerification {
  constructor(
    private authService: AuthService,
    private prismaService: PrismaService,
  ) {}
  async verifyUsername(user): Promise<Auth[] | undefined> {
    console.log('find user name', user);
    const _users = await this.prismaService.auth.findMany({
      where: { username: user },
    });
    return _users;
  }
}

export class UsrValid implements PipeTransform {
  constructor(@Optional() private prismaService: PrismaService) {}
  async transform(value) {
    await console.log(this.verifyUsername);
    throw new BadRequestException(
      `Username '${value.username}' allready exists`,
    );
    // await console.log('value', value);
  }
  async verifyUsername(user): Promise<Auth[] | undefined> {
    console.log('find user name', user);
    const _users = await this.prismaService.auth.findMany({
      where: { username: user },
    });
    return _users;
  }
}
