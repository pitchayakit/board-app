import { IsOptional, IsString, ValidateIf, IsEmail } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  readonly username?: string;

  @IsOptional()
  @IsEmail()
  readonly email?: string;

  @IsOptional()
  @IsString()
  readonly password?: string;

  // Custom validator to ensure at least one field is provided
  @ValidateIf((o) => !o.username && !o.email && !o.password)
  @IsString({ always: false }) // This is a dummy validator; the important part is ValidateIf
  readonly atLeastOneFieldIsRequired?: string;
}
