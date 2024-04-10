export class LocationDto {
    type: string;
    coordinates: number[];
}
export class GpsDto {
    location: LocationDto;
    accuracy: number;
    emergency: boolean;
    timestamp: Date;
    id: string;
    timestampReceived: Date;
}
