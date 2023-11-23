import { IsNotEmpty } from "class-validator";

export class RegisterDto {
    @IsNotEmpty()
    user: string;

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    bornDate: Date;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    lastName: string;
}
