// src/user/user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { Comment } from '../comment/comment.entity/comment.entity';
@ObjectType()
@Entity('users')
export class User {
    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    username: string;

    @Column()
    password: string;

    @Field()
    @Column()
    email: string;

    @OneToMany(() => Comment, (comment) => comment.user)
    comments: Promise<Comment[]>;
}
