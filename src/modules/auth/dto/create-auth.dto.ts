import { UserRole } from '@prisma/client';
import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";

// export class AuthInfo implements Auth {

// }
export class CreateAuthDto {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: any;

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @Matches(
        /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        { message: 'password too weak' },
    )
    password: any;

    @IsEmail()
    email: string;
    role: UserRole = UserRole.VISITOR;

    salt: any;
}
