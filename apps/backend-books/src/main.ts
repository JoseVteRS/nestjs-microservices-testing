/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app/app.module';

const logger = new Logger();

function loggerInit() {
  return logger.log('Microservice BOOKS is listening', 'BOOKS');
}

async function bootstrap() {
  // const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  //   AppModule,
  //   {
  //     transport: Transport.RMQ,
  //     options: {
  //       urls: ['amqp://root:admin@127.0.0.1:5672'],
  //       queue: 'BOOKS_QUEUE',
  //       queueOptions: {
  //         durable: false,
  //       },
  //     },
  //   }
  // );
  // app.listen();
  // loggerInit();

  const app = await NestFactory.create(AppModule);
  await app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://root:admin@127.0.0.1:5672'],
      queue: 'BOOKS_QUEUE',
      queueOptions: {
        durable: false,
      },
    },
  });

  app.startAllMicroservices();
  loggerInit();
}
bootstrap();
