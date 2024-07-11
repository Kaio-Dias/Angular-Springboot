import { Injectable } from '@angular/core';
import { UserModel } from './users/UserModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private user: UserModel[] = [];

  private apiUrl = 'http://localhost:8084/api/users';
    
  constructor(private http: HttpClient) {
    
  }  
  //provavelmente seu User virará UserModel
  save(user:UserModel) : Observable<UserModel>{
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<UserModel>(this.apiUrl, user, {headers})
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
