import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";

type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

type Support = {
  url: string;
  text: string;
}

type UserList = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
  support: Support;
}

@Injectable()
export class ClientService {
  constructor(private httpService: HttpService) {}

  async getUsersList() {
    return this.httpService.get<UserList>('https://reqres.in/api/users?page=2')
  }
}
