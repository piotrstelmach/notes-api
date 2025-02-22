import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFileSync } from 'fs';
import { AppModule } from '../src/app.module';

async function generateOpenAPI() {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('Notes API')
        .setDescription('API do zarządzania notatkami')
        .setVersion('1.0')
        .addBearerAuth()
        .build();

    const document = SwaggerModule.createDocument(app, config);

    writeFileSync('./openapi.yaml', JSON.stringify(document, null, 2));

    console.log('✅ OpenAPI spec wygenerowana w openapi.yaml');
    process.exit(0);
}

generateOpenAPI();