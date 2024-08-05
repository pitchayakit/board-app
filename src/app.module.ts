import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { PaginationModule } from './pagination/pagination.module';
import { AuthModule } from './auth/auth.module';
import { CommentModule } from './comment/comment.module';
import typeorm from './config/typeorm';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [typeorm],
        }),
        TypeOrmModule.forRootAsync({
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) =>
                configService.get('typeorm'),
        }),
        UserModule,
        PaginationModule,
        AuthModule,
        CommentModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
