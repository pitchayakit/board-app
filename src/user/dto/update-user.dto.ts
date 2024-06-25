import { IsOptional, IsString, ValidateIf, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class UpdateUserDto {
  @ApiProperty({ example: 'john_doe', description: 'Unique username' })
  @IsOptional()
  @IsString()
  readonly username?: string;

  @ApiProperty({ example: 'john@gmail.com', description: 'Email address' })
  @IsOptional()
  @IsEmail()
  readonly email?: string;

  @ApiProperty({ example: 'password123', description: 'User password' })
  @IsOptional()
  @IsString()
  readonly password?: string;

  // Custom validator to ensure at least one field is provided
  @ValidateIf((o) => !o.username && !o.email && !o.password)
  @IsString({ always: false }) // This is a dummy validator; the important part is ValidateIf
  readonly atLeastOneFieldIsRequired?: string;
}
