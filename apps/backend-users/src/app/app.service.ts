import { Injectable } from '@nestjs/common';

const USERS = [
  {
    id: 1,
    name: 'Jose',
  },
  {
    id: 2,
    name: 'Alba',
  },
];

@Injectable()
export class AppService {
  getAllUsers() {
    return USERS;
  }
}
