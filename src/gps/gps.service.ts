import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GpsDto } from './dto/gps.dto';
import { Prisma, Location } from '@prisma/client';

@Injectable()
export class GpsService {
    constructor(private readonly prisma: PrismaService) {}

    async createGps(data: GpsDto) {
        try {
            const {
                location,
                accuracy,
                emergency,
                timestamp,
                id,
                timestampReceived,
            } = data;
            const [lon, lat] = location.coordinates;

            const savedData =
                await this.prisma.location.create({
                    data: {
                        accuracy,
                        emergency,
                        timestamp,
                        id_post: id,
                        timestampReceived,
                        lat,
                        lon,
                    },
                });
            return {
                message: 'Dados salvos com sucesso',
                data: savedData,
            };
        } catch (error) {
            throw new Error(
                'Erro ao salvar os dados: ' + error.message,
            );
        }
    }
    async findAll() {
        try {
            const locations: Array<Location> =
                await this.prisma.location.findMany();
            return locations;
        } catch (error) {
            console.log(error);
        }
    }

    async findOneByRadioId(id_post: string) {
        try {
            return this.prisma.location.findFirstOrThrow({
                where: { id_post },
            });
        } catch (error) {
            console.log(error);
        }
    }

    async findLastByRadio() {
        try {
            const locations: Array<Location> =
                await this.prisma.location.findMany({
                    orderBy: [{ timestamp: 'desc' }],
                    distinct: ['id_post'],
                });
            return locations;
        } catch (error) {
            console.log(error);
        }
    }

    async findLastOneByRadioId(id_post: string) {
        try {
            return this.prisma.location.findFirstOrThrow({
                where: { id_post },
                orderBy: [{ timestamp: 'desc' }],
                distinct: ['id_post'],
            });
        } catch (error) {
            console.log(error);
        }
    }
}
