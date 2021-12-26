import { IsEmail, IsNotEmpty, IsNumber, IsString, Matches, MaxLength, Min, MinLength } from "class-validator";


export class CreateAuthDto {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string;

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @Matches(
        /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        { message: 'password too weak' },
    )
    password: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    role: UserRole = UserRole.VISITOR;
}
export enum UserRole {
    ADMIN,
    MODARATOR,
    VISITOR
}
