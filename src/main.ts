import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as mongoose from 'mongoose';

async function bootstrap() {
  mongoose.connect('mongodb://localhost:27017/', { 
    useNewUrlParser: true,
    useFindAndModify: false, 
    useUnifiedTopology: true, 
    useCreateIndex: true, 
    dbName: "nest-blog-api" });
  // app是创建的nest实例
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('NestJs博客API')
    .setDescription('我的第一个NestJs项目')
    .setVersion('1.0')
    // .addTag('cats') // 添加标签
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document); // 设置接口文档挂载在哪个路径

  await app.listen(5000);
}
bootstrap();
