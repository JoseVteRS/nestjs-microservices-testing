import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SERVICES_NAMES } from '../../../../libs/contants/services-name';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SERVICES_NAMES.BOOKS,
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://root:admin@127.0.0.1:5672'],
          queue: 'BOOKS_QUEUE',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
