import { Injectable } from '@nestjs/common';
import { InjectStripe } from 'nestjs-stripe';
import Stripe from 'stripe';
import { CreatePaymentDto } from './payment.dto';
import { Payment } from './payment.interface';

@Injectable()
export class PaymentService {
  constructor(@InjectStripe() private readonly stripe: Stripe) {}

  async create(createPaymentDto: CreatePaymentDto) {
    console.log(createPaymentDto);

    try {
      const paymentIntent = await this.stripe.paymentIntents.create({
        amount: createPaymentDto.price,
        currency: 'usd',
        payment_method_types: createPaymentDto.type,
        // confirm: true,
      });

      const payment = {
        price: paymentIntent.amount,
        type: paymentIntent.payment_method_types,
      } as Payment;

      return payment;
    } catch (error) {
      let err = { error, resp: 'error' };
      return err;
    }
  }
}
