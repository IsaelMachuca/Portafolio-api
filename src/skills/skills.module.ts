import { Module } from '@nestjs/common';
import { SkillsController } from './controller/skills.controller';
import { SkillsService } from './service/skills.service';
import { FirebaseModule } from 'src/firebase.module';

@Module({
  imports: [FirebaseModule],
  providers: [SkillsService],
  controllers: [SkillsController]
})
export class SkillsModule {

}
