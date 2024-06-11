// skills.controller.ts
import { Body, Controller, Get, Post } from '@nestjs/common';
import { SkillsService } from '../service/skills.service';

@Controller('skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @Post('createData')
  async createData(@Body() data: any): Promise<void> {
    await this.skillsService.createData(data);
  }

  @Get('getData')
  async getData(): Promise<any> {
    return this.skillsService.getData();
  }
}
