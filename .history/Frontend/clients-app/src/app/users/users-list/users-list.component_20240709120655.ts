import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'

import {UserModel} from '../UserModel';
import { UsersService } from '../../users.service'

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit {

  users: UserModel[] = [];

  constructor(
    private userService: UsersService,
    private router: Router
  ){

  }

  ngOnInit(): void {
    this.userService
    .getUsers()
    .subscribe(response => this.users = response);
  }
}
