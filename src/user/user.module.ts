// src/user/user.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CommentModule } from 'src/comment/comment.module';
import { UserResolver } from './user.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([User]), CommentModule],
    controllers: [UserController],
    providers: [UserService, UserResolver],
    exports: [UserService],
})
export class UserModule {}
