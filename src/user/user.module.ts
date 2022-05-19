import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { HttpModule } from "@nestjs/axios";
import { ClientService } from "./client.service";

@Module({
  imports: [HttpModule],
  controllers: [UserController],
  providers: [UserService, ClientService]
})
export class UserModule {}
