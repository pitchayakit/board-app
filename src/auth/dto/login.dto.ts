import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
    @ApiProperty({
        description: 'User login username',
        example: 'user@example.com',
    })
    username: string;

    @ApiProperty({
        description: 'User password',
        example: 'strongPassword123',
    })
    password: string;
}
