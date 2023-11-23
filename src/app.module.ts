import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { MongooseModule } from '@nestjs/mongoose';
import {ConfigModule} from "@nestjs/config";
import { UsersModule } from './users/users.module';
import { GlobalsModule } from './globals/globals.module';
import { ReviewsModule } from './reviews/reviews.module';
import { LocalsModule } from './locals/locals.module';
import { ChatsModule } from './chats/chats.module';
import { MessagesModule } from './messages/messages.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    DatabaseModule,
    UsersModule,
    GlobalsModule,
    ReviewsModule,
    LocalsModule,
    ChatsModule,
    MessagesModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [UsersModule]
})
export class AppModule {}
