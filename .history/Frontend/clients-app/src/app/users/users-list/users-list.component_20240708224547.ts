import { Component, OnInit } from '@angular/core';
import {UserModel} from '../UserModel';
import { UsersService } from '../../users.service'

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit {

  users: UserModel[] = [];

  ngOnInit(): void {}

  constructor(private _userService: UserService){

  }

  

}
