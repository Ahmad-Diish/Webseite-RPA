import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS aktivieren
  app.enableCors({
    origin: 'http://localhost:3000', // Deine Next.js Frontend URL
    methods: 'GET,POST,PUT,DELETE',  // Erlaubte HTTP-Methoden
  });

  await app.listen(3001); // Stelle sicher, dass NestJS auf einem anderen Port läuft als Next.js
}
bootstrap();


