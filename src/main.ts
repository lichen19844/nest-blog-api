import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // app是创建的nest实例
  const app = await NestFactory.create(AppModule);
  await app.listen(5000);
}
bootstrap();
