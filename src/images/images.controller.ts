import { Controller, Get } from '@nestjs/common';

@Controller('images')
export class ImagesController {
  @Get()
  findAll(): string {
    return 'This action returns all images.';
  }
}
