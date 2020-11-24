import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('payment')
export class PaymentController {
  @Get()
  getHello(@Res() res: Response) {
    return res.status(200).send('hello world!!!!!!!');
  }
}
