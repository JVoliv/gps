import {
    Body,
    Controller,
    Get,
    Param,
    Post,
} from '@nestjs/common';
import { Gps } from './entity/gps.entity';
import { GpsService } from './gps.service';
import { GpsDto } from './dto/gps.dto';
import { get } from 'http';

@Controller('gps')
export class GpsController {
    constructor(private readonly gpsService: GpsService) {}

    @Post('receive')
    async gps(@Body() data: GpsDto) {
        return this.gpsService.createGps(data);
    }

    @Get()
    findAll() {
        return this.gpsService.findAll();
    }

    @Get('distinct')
    findLastByRadio() {
        return this.gpsService.findLastByRadio();
    }

    @Get(':id_post')
    findOneByRadioId(@Param('id_post') id_post: string) {
        return this.gpsService.findOneByRadioId(id_post);
    }

    @Get('last/:id_post')
    findLastOneByRadioId(
        @Param('id_post') id_post: string,
    ) {
        return this.gpsService.findOneByRadioId(id_post);
    }
}
