import { Injectable } from '@nestjs/common';
import { Image } from './interfaces/image.interface';

@Injectable()
export class ImagesService {
  private readonly images: Image[] = [];

  create(image: Image): void {
    this.images.push(image);
  }

  findAll(): Image[] {
    return this.images;
  }
}
