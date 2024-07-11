import { Injectable } from '@angular/core';
import { User } from './users/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: User[] = [];
    
  constructor(private http: HttpClient) {
    
  }  
  //provavelmente seu User virará UserModel
  save(user:User) : Observable<User>{
    return this.http.post<User>('http://localhost:8084/api/users/', user)
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
