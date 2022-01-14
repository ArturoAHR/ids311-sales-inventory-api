import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UserRepository } from './repositories/user.repository';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
