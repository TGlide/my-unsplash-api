import { Module } from '@nestjs/common';
import { ImagesController } from './images.controller';
import { DatabaseModule } from '../database/database.module';
import { ImagesService } from './images.service';
import { imageProviders } from './images.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ImagesController],
  providers: [...imageProviders, ImagesService],
  exports: [...imageProviders],
})
export class ImagesModule {}
