import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ImagesService } from './images.service';
import { CreateImageDto } from './dto/create-image-dto';
import { Image } from './image.entity';

@Controller('images')
export class ImagesController {
  constructor(private imagesService: ImagesService) {}

  @Get()
  async findAll(): Promise<Image[]> {
    return this.imagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} image.`;
  }

  @Post()
  async create(@Body() createImageDto: CreateImageDto): Promise<void> {
    this.imagesService.create(createImageDto);
  }
}
