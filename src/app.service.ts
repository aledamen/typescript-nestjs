import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Afu achu';
  }
  getUsers(): string[] {
    return ['carlos', 'juan'];
  }
}
