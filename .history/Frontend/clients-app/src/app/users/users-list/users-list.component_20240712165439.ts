import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router'

import { UserModel } from '../UserModel';
import { UsersService } from '../../users.service'
import { response } from 'express';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit {

  users: UserModel[] = [];
  userSelected: UserModel = new UserModel();
  

  constructor(
    private userService: UsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => this.users = response);
  }

  newRegister(){
    this.router.navigate(['/users-form'])
  }

  readyDelete(user:UserModel){
    this.userSelected = user;
  }

  deleteUser(){
    console.log(this.userSelected)
  }
}
