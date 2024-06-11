// skills.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { Database, ref, push, set, get, DataSnapshot } from 'firebase/database';

@Injectable()
export class SkillsService {
  constructor(
    @Inject('FIREBASE_DATABASE') private readonly firebaseDatabase: Database
  ) {}

  async createData(data: any): Promise<void> {
    const dataRef = ref(this.firebaseDatabase, 'Skills');
    const newElementRef = push(dataRef);
    await set(newElementRef, data);
  }

  async getData(): Promise<any> {
    const dataRef = ref(this.firebaseDatabase, 'Skills');
    const snapshot: DataSnapshot = await get(dataRef);
    return snapshot.val();
  }
}
