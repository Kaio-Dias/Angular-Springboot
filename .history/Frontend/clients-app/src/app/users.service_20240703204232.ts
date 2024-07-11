import { Injectable } from '@angular/core';
import { User } from './users/user';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: User[] = [];

  /*constructor() { 
    this.users = [
      new User(1, 'John Doe', '123.456.789-00', '2023-01-01'),
      new User(2, 'Jane Doe', '987.654.321-00', '2023-02-01')
    ];
  }*/
    
  constructor(private http: HttpClient) {
    
  }  

  getUsers() : User[] {
    return this.users;
  }

  
  getUser(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  removeUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }
}
