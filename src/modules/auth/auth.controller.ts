import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Auth } from '@prisma/client';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('/signup')
  @UsePipes(ValidationPipe)
  async createUser(@Body() createAuthDto: CreateAuthDto): Promise<Auth> {
    return this.authService.createUser(createAuthDto);
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
