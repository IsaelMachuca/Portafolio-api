import { Module } from '@nestjs/common';
import { StrengthsService } from './service/strengths.service';
import { StrengthsController } from './controller/strengths.controller';
import { FirebaseModule } from 'src/firebase.module';

@Module({
  imports: [FirebaseModule],
  providers: [StrengthsService],
  controllers: [StrengthsController]
})
export class StrengthsModule {}
