import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Image } from './image.entity';
import { CreateImageDto } from './dto/create-image-dto';

@Injectable()
export class ImagesService {
  constructor(
    @Inject('IMAGE_REPOSITORY')
    private imageRepository: Repository<Image>,
  ) {}

  create(image: CreateImageDto): void {
    const imageEntity = this.imageRepository.create(image);
    this.imageRepository.save(imageEntity);
  }

  findAll(): Promise<Image[]> {
    return this.imageRepository.find();
  }
}
