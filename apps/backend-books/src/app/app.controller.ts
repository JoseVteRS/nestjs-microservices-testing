import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { BookUseCases } from '../../../../libs/contants/use-cases/book.usecase.enum';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly bookService: AppService) {}

  @EventPattern({ cmd: BookUseCases.GET_ALL_BOOKS })
  getAllBooks() {
    return this.bookService.getAllBooks();
  }
}
