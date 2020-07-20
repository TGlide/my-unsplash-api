import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImagesController } from './images/images.controller';
import { ImagesService } from './images/images.service';
import { ImagesModule } from './images/images.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ImagesModule, DatabaseModule],
  controllers: [AppController, ImagesController],
  providers: [AppService, ImagesService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('images');
  }
}
