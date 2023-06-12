import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { StudentRegistrationModule } from './student-registration/student-registration.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "postgres",
    database: "nestwafprimer",
    entities: [
    "dist/**/*.entity{.ts,.js}"
    ],
    synchronize: true
    }),StudentRegistrationModule],
  controllers: [AppController], //which controller is associated with the module. serves as a gateway
  providers: [AppService],   //which service is associated with the module
})

export class AppModule {}
