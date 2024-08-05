// src/user/user.controller.ts
import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Query,
    Delete,
    Patch,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { GetUsersDto } from './dto/get-users.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('users')
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
    findAll(@Query() getUsersDto: GetUsersDto) {
        return this.userService.findAllWithPagination(getUsersDto);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.userService.findByPk(+id);
    }

    @Get(':id/comments')
    getUserComments(@Param('id') id: number) {
        return this.userService.getComments(id);
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
    async create(@Body() createUserDto: CreateUserDto) {
        return await this.userService.create(createUserDto);
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(+id, updateUserDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.userService.remove(+id);
    }
}
