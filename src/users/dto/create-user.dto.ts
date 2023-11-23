import { IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    user: string;
  
    @IsNotEmpty()
    email: string;
  
    @IsNotEmpty()
    password: string;
  
    @IsNotEmpty()
    isActive: boolean;
  
    name?: string;
  
    lastName?: string;
  
    bornDate?: Date;
  
    typeIden?: string;
  
    numberIden?: number;
}
