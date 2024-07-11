import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UserModel } from '../UserModel';
import { UsersService } from '../../users.service'
import { response} from 'express';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, RouterModule } from '@angular/router'

@Component({
  selector: 'app-users-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {
  
  user: UserModel = new UserModel();
  success: boolean = false;

  constructor(private usersService: UsersService,
    private router:Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.user = new UserModel(); // Inicialize user com um novo objeto UserModel
    this.loadUser(1); // Por exemplo, carregando o usuário com id 1
  }

  loadUser(id: number): void {
    this.usersService.getUserById(id).subscribe((data: UserModel) => {
      this.user = data;
    });
  }

  backRegister(){
    this.router.navigate(['/users-list'])
  }

  onSubmit(): void{
    this.usersService.save(this.user).subscribe(response => {
      this.success = true;
    }, errorResponse =>
      console.log(errorResponse.error.errors)
  )
  }
}
