import { Inject, Injectable } from '@nestjs/common';
import { Db } from 'mongodb';

@Injectable()
export class AppService {
  constructor(@Inject('MONGO') private mongo: Db) {}
  getHello(): string {
    return 'Hello World!';
  }

  getTasks() {
    const tasksCollection = this.mongo.collection('tasks');
    return tasksCollection.find().toArray();
  }
}
