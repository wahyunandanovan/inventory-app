import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ forbidUnknownValues: false }));

  app.useGlobalPipes(
    new ValidationPipe({
      validatorPackage: require('@nestjs/class-validator'),
      transformerPackage: require('class-transformer'),
      //whitelist: true,
      forbidUnknownValues: false,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Inventory Docs Api')
    .setDescription('Author : wahyunandanovan@gmail.com')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs', app, document);

  await app.listen(3000);
}
bootstrap();
