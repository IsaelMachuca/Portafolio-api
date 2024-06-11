// firebase.module.ts
import { Module, Global } from '@nestjs/common';
import { firebaseDatabase } from './firebase.config';

@Global()
@Module({
  providers: [
    {
      provide: 'FIREBASE_DATABASE',
      useValue: firebaseDatabase,
    },
  ],
  exports: ['FIREBASE_DATABASE'],
})
export class FirebaseModule {}
