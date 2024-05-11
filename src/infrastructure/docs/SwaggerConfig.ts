import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { readPackageJson } from 'src/commons/utils/loader.package.Info';

export class SwaggerStartup {
  static async init(app: INestApplication) {
    const { version, name } = await readPackageJson();
    const config = new DocumentBuilder()
      .setTitle(name)
      .setDescription('Teste Backend - Documentação da API')
      .setVersion(version)
      .addTag('Test Backend')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs/swagger', app, document);
  }
}
