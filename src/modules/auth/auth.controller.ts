import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Logger,
  NotAcceptableException,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { MESSAGES } from '@nestjs/core/constants';
import { Auth } from '@prisma/client';
// import * as bcrypt from 'bcrypt';
import { AuthDto } from 'src/_gen/prisma-class/auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UniqueVerification } from './pipes/unique.pipe';
import { AuthEncryptionService } from './_services/auth-encryption.service';
import { AuthService } from './_services/auth.service';

@Controller('auth')
export class AuthController {
  bcrypt = require('bcrypt');
  constructor(
    private readonly authService: AuthService,
    private authEncription: AuthEncryptionService,
    private uniqueVerify: UniqueVerification,
  ) {}

  @Post('/signup')
  @UsePipes(ValidationPipe)
  createUser(@Body() authDto: AuthDto) {
    // @UsePipes(UniqueVerification)
    this.uniqueVerify.verifyUsername(authDto.username).then((res) => {
      if (res.length === 0) {
        this.authEncription
          .encriptionMethod(authDto.password)
          .then((res) => {
            console.log('res', res);
            authDto.password = res.password;
            authDto.salt = res.salt;
          })
          .finally(() => this.authService.createUser(authDto));
      } else {
        this.uniqueVerify.transform(res.length);
        console.log('else');
        Logger.log('Invalid');
        throw new NotAcceptableException();
      }
    });
  }
  // create(@Body() createAuthDto: CreateAuthDto) {
  //   return this.authService.create(createAuthDto);
  // }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get('/:id')
  async getUserById(@Param('id') id: string): Promise<Auth> {
    return this.authService.getUserById({ id: Number(id) });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete('/:id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.authService.remove({ id: Number(id) });
  }
}
