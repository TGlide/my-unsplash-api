import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImagesController } from './images/images.controller';

@Module({
  imports: [],
  controllers: [AppController, ImagesController],
  providers: [AppService],
})
export class AppModule {}
