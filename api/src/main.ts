// global config for temmplates dir
// eslint-disable-next-line @typescript-eslint/no-require-imports
require('dotenv').config();
process.env.TEMPLATE_DIR = `${__dirname}/../templates`;

import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // TODO - config for domain
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.set('view engine', 'html');
  // avoid warning for max listeners memory leak
  process.setMaxListeners(200);

  if (process.env.NODE_ENV === 'development') {
    // generate api docs
    const options = new DocumentBuilder()
      .setTitle('API docs')
      .setDescription('The API docs')
      .setVersion('1.0')
      .addTag('api')
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('apidocs', app, document);
  }

  await app.listen(process.env.HTTP_PORT);
}

bootstrap();
