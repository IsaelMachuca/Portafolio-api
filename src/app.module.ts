// app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SkillsModule } from './skills/skills.module';
import { FirebaseModule } from './firebase.module';
import { StrengthsModule } from './strengths/strengths.module';
import { ProjectModule } from './projects/projects.module';

@Module({
  imports: [FirebaseModule, SkillsModule, StrengthsModule, ProjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
