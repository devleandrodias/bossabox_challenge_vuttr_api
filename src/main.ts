import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const options = new DocumentBuilder()
    .setTitle('Very Useful Tools to Remember')
    .setDescription(
      'A aplicação é um simples repositório para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags.',
    )
    .addBearerAuth()
    .addServer(process.env.URL_API)
    .setVersion('1.0.0')
    .setContact(
      'Smart Black Code Solution',
      'https://www.smartblackcode.com',
      'contato@smartblackcode.com',
    )
    .setExternalDoc(
      'Challenge BossaBox Api GitHub - (Código Fonte)',
      'https://github.com/devleandrodias/bossabox_challenge_vuttr_api',
    )
    .build();

  SwaggerModule.setup('docs', app, SwaggerModule.createDocument(app, options));

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
