import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map, timeout } from 'rxjs/operators';
import { SERVICES_NAMES } from '../../../../libs/contants/services-name';
import { BookUseCases } from '../../../../libs/contants/use-cases/book.usecase.enum';

@Injectable()
export class AppService {
  constructor(
    @Inject(SERVICES_NAMES.BOOKS) private readonly booksServices: ClientProxy
  ) {}

  getAllBooks() {
    const startTs = Date.now();
    const pattern = { cmd: BookUseCases.GET_ALL_BOOKS };
    const payload = {};
    return this.booksServices
      .send<string>(pattern, payload)
      .pipe(map((data: string) => ({ data, duration: Date.now() - startTs })))
      .pipe(timeout(5000));
  }
}
