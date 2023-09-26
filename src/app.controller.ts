import { Controller, Get, Res } from '@nestjs/common';
import { AppService, MessageInterface } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): MessageInterface {
    return this.appService.getHello();
  }
}
