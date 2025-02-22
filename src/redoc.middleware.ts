import { INestApplication } from '@nestjs/common';
import redoc from 'redoc-express';

export function setupRedoc(app: INestApplication) {
    const redocOptions = {
        title: 'Notes API with redoc',
        version: '1.0',
        specUrl: '/api-json',
    };

    app.use('/docs', redoc(redocOptions));
}