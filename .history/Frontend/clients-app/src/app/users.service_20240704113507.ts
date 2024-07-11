import { Injectable } from '@angular/core';
import { UserModel } from './users/UserModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private user: UserModel[] = [];
    
  constructor(private http: HttpClient) {
    
  }  
  //provavelmente seu User virará UserModel
  save(user:UserModel) : Observable<UserModel>{
    return this.http.post<UserModel>('http://localhost:8084/api/users/', user)
  }

  getUsers() : UserModel[] {
    return this.user;
  }

  
  getUser(id: number): UserModel | undefined {
    return this.user.find(user => user.id === id);
  }

  addUser(user: UserModel): void {
    this.user.push(user);
  }

  removeUser(id: number): void {
    this.user = this.user.filter(user => user.id !== id);
  }
}
