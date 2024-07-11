import { Injectable } from '@angular/core';
import { User } from './users/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: User[] = [];

  constructor() { 
    this.users = [
      new User(1, 'John Doe', '123.456.789-00', '2023-01-01'),
      new User(2, 'Jane Doe', '987.654.321-00', '2023-02-01')
    ];
  }

  getUser() : User[] {
    return this.users;
  }
}
