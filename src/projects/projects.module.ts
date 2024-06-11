// project.module.ts
import { Module } from '@nestjs/common';
import { ProjectController } from './controller/projects.controller';
import { ProjectService } from './service/projects.service';
import { FirebaseModule } from 'src/firebase.module';

@Module({
  imports: [FirebaseModule],
  providers: [ProjectService],
  controllers: [ProjectController]
})
export class ProjectModule {}
