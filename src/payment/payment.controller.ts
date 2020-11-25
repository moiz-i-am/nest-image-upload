import {
  Body,
  Controller,
  Get,
  Post,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Response } from 'express';

import { CreatePaymentDto } from './payment.dto';
import { Payment } from './payment.interface';
import { PaymentService } from './payment.service';

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Get()
  getHello(@Res() res: Response) {
    return res.status(200).send('hello world!!!!!!!');
  }

  @UsePipes(new ValidationPipe({ whitelist: true }))
  @Post('intent')
  async createPaymentIntent(
    @Res() res: Response,
    @Body() createPaymentDto: CreatePaymentDto,
  ) {
    const paymentIntent = await this.paymentService.create({
      ...createPaymentDto,
    });

    const { resp, error } = paymentIntent;

    if (resp === 'error') {
      const { message, statusCode } = error;
      return res.status(statusCode).send({ message });
    }

    return res.send(paymentIntent);
  }
}
