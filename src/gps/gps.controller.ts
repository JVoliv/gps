import {
    Body,
    Controller,
    Post,
    ValidationPipe,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('gps')
export class GpsController {
    constructor(
        private readonly prismaService: PrismaService,
    ) {}

    @Post('receive')
    async gps(@Body(ValidationPipe) data: any) {
        try {
            const {
                location,
                accuracy,
                emergency,
                timestamp,
                id,
                timestampReceived,
            } = data;
            const [lon, lat] =
                location.coordinates;

            const savedData =
                await this.prismaService.location.create(
                    {
                        data: {
                            accuracy,
                            emergency,
                            timestamp,
                            id_post: id,
                            timestampReceived,
                            lat,
                            lon,
                        },
                    },
                );
            return {
                message:
                    'Dados salvos com sucesso',
                data: savedData,
            };
        } catch (error) {
            throw new Error(
                'Erro ao salvar os dados: ' +
                    error.message,
            );
        }
    }
}
