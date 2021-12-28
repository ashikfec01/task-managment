import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '@prisma/client';
import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";



export class AuthDto {
    @ApiProperty({ type: Number })
    id: number;

    @ApiProperty({ type: String })
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string;

    @ApiProperty({ type: String })
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @Matches(
        /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        { message: 'password too weak' },
    )
    password: string;

    @ApiProperty({ type: String })
    @IsEmail()
    email: string;

    @ApiProperty({ enum: UserRole, enumName: 'UserRole' })
    role: UserRole = UserRole.VISITOR

    @ApiProperty({ type: String })
    salt: string;

}