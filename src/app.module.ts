import { Module } from '@nestjs/common';
import { GpsController } from './gps/gps.controller';
import { GpsModule } from './gps/gps.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        GpsModule,
        PrismaModule,
    ],
})
export class AppModule {}
