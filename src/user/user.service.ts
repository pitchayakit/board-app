// src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { Comment } from '../comment/comment.entity/comment.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { GetUsersDto } from './dto/get-users.dto';
@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,

        @InjectRepository(Comment)
        private commentRepository: Repository<Comment>,
    ) {}

    async findAllWithPagination(
        query: GetUsersDto,
    ): Promise<{ data: User[]; page: number; total: number }> {
        const users = await this.userRepository.find({
            skip: (query.page - 1) * query.limit,
            take: query.limit,
        });

        const total = await this.userRepository.count();

        return {
            data: users,
            total: total,
            page: query.page,
        };
    }

    async findAll(query: Partial<User>): Promise<User[]> {
        return this.userRepository.find({
            where: query,
        });
    }

    async findByPk(id: number): Promise<User> {
        return this.userRepository.findOneBy({ id });
    }

    async findOne(query: Partial<User>): Promise<User> {
        return this.userRepository.findOneBy(query);
    }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const newUser = this.userRepository.create(createUserDto);
        return this.userRepository.save(newUser);
    }

    async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
        // Retrieve the user by id
        const user = await this.userRepository.findOneBy({ id });
        if (!user) {
            throw new Error('User not found');
        }

        // Update the user with new values
        const updatedUser = Object.assign(user, updateUserDto);

        // Update the user
        await this.userRepository.update(id, updateUserDto);

        // Return the updated user
        return updatedUser;
    }

    async remove(id: number): Promise<string> {
        const result = await this.userRepository.delete(id);

        if (result.affected && result.affected > 0) {
            return 'User successfully removed';
        } else {
            throw new Error('User not found');
        }
    }

    async getComments(id: number): Promise<Comment[]> {
        const comments = await this.commentRepository.find({
            where: { user: { id } },
        });

        return comments;
    }
}
