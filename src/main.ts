import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors:true});
  app.enableCors();

  const config = new DocumentBuilder()
  .setTitle('Auth')
  .setDescription('auth services')
  .setVersion("1.0")
  .addBearerAuth()
  .build()

  const document = SwaggerModule.createDocument(app,config);
  app.enableCors({
    origin: ['http://localhost:5173', 'http://localhost:8080'],

    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  });

  SwaggerModule.setup('api', app, document);
  app.setGlobalPrefix("api/v1");

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  );


  await app.listen(3000);
}
bootstrap();

