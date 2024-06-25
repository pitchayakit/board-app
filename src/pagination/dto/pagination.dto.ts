import { IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PaginationDto {
    @ApiProperty({ required: false, example: 1 })
    @IsOptional()
    page: number = 1;

    @ApiProperty({ required: false, example: 10 })
    @IsOptional()
    limit: number = 10;
}
