import { Injectable } from '@nestjs/common';

const BOOKS = [
  {
    id: 1,
    title: 'Títilo del libro',
  },
  {
    id: 2,
    title: 'Títilo del libro 2',
  },
];

@Injectable()
export class AppService {
  async getAllBooks() {
    return BOOKS;
  }
}
