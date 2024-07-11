import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UserModel } from '../UserModel';
import { UsersService } from '../../users.service'
import { response} from 'express';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'

@Component({
  selector: 'app-users-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {
  
  user: UserModel;
  success: boolean = false;

  constructor(private usersService: UsersService,
    private router:Router
  ) {
    this.user = new UserModel(10, 'Anderson Silva', '00987654322', '2024-01-08');
  }

  ngOnInit(): void {}

  backRegister(){
    this.router.navigate(['/users-list'])
  }

  onSubmit(): void{
    console.log('Butt on clicked hihihi', this.user);
    this.usersService.save(this.user).subscribe(response => {
      this.success = true;
    }, errorResponse =>
      console.log(errorResponse.error.errors)
  )
  }

}
