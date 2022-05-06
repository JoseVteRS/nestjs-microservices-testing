import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('books')
  getAllBooks() {
    return this.appService.getAllBooks();
  }
}
