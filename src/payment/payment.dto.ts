import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePaymentDto {
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  @IsArray()
  type: string[];
}
