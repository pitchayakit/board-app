import { IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetUsersDto {
    @ApiProperty({ required: false, example: 1 })
    @IsOptional()
    page: number;

    @ApiProperty({ required: false, example: 10 })
    @IsOptional()
    limit: number;
}
