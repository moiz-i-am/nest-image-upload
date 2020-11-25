import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { StripeModule } from 'nestjs-stripe';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [
    MulterModule.register({
      dest: './temp',
    }),
    StripeModule.forRoot({
      apiKey:
        'sk_test_51HqxsfHC3gkSMdE8xhswi1ggoVNDsrkVcaxSRSMOZkx27WOiafSoFxJgKIpwejIGb6ZmQ3LCizhGCtsrBC2FdMqK003aHkq89f',
      apiVersion: '2020-08-27',
    }),
    PaymentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
