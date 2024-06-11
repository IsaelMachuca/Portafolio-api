// project.controller.ts
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProjectService } from '../service/projects.service';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post('createData')
  async createData(@Body() data: any): Promise<void> {
    await this.projectService.createData(data);
  }

  @Get('getData')
  async getData(): Promise<any> {
    return this.projectService.getData();
  }
}
