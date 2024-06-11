// project.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { Database, ref, push, set, get, DataSnapshot } from 'firebase/database';

@Injectable()
export class ProjectService {
  constructor(
    @Inject('FIREBASE_DATABASE') private readonly firebaseDatabase: Database
  ) {}

  async createData(data: any): Promise<void> {
    const dataRef = ref(this.firebaseDatabase, 'Projects');
    const newElementRef = push(dataRef);
    await set(newElementRef, data);
  }

  async getData(): Promise<any> {
    const dataRef = ref(this.firebaseDatabase, 'Projects');
    const snapshot: DataSnapshot = await get(dataRef);
    return snapshot.val();
  }
}
