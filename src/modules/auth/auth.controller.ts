import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Auth } from '@prisma/client';
// import * as bcrypt from 'bcrypt';
import { AuthDto } from 'src/_gen/prisma-class/auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { AuthEncryptionService } from './_services/auth-encryption.service';
import { AuthService } from './_services/auth.service';

@Controller('auth')
export class AuthController {
  bcrypt = require('bcrypt');
  constructor(private readonly authService: AuthService, private authEncription: AuthEncryptionService) { }

  @Post('/signup')
  @UsePipes(ValidationPipe)
  createUser(@Body() authDto: AuthDto) {
    this.authEncription.encriptionMethod(authDto.username, authDto.password).then(res => {
      console.log("res", res);
      authDto.username = res.username;
      authDto.password = res.password;
      authDto.salt = res.salt;
    }).finally(
      () => this.authService.createUser(authDto)
    )
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

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
