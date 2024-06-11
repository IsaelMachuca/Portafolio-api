// strengths.controller.ts
import { Body, Controller, Get, Post } from '@nestjs/common';
import { StrengthsService } from '../service/strengths.service';

@Controller('strengths')
export class StrengthsController {
  constructor(private readonly strengthsService: StrengthsService) {}

  @Post('createData')
  async createData(@Body() data: any): Promise<void> {
    await this.strengthsService.createData(data);
  }

  @Get('getData')
  async getData(): Promise<any> {
    return this.strengthsService.getData();
  }
}
