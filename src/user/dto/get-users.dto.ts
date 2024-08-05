import { PaginationDto } from '../../pagination/dto/pagination.dto';
import { IsOptional } from 'class-validator';

export class GetUsersDto extends PaginationDto {
    @IsOptional()
    username: string;
    @IsOptional()
    email: string;
}
