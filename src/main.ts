import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerStartup } from './infrastructure/docs/SwaggerConfig';

async function bootstrap() {
  const logger = new Logger('Application');

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );
  app.setGlobalPrefix('api');
  app.enableCors({ origin: '*' });

  await SwaggerStartup.init(app);

  await app.listen(3000);
  logger.log(`Application is running on port: ${3000}`);
}
bootstrap();
