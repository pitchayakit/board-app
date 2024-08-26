import { PaginationDto } from '../../pagination/dto/pagination.dto';
import { IsOptional } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class GetUsersDto extends PaginationDto {
    @Field()
    @IsOptional()
    username: string;

    @Field()
    @IsOptional()
    email: string;
}
