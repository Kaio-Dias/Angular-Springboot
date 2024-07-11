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

  ngOnInit(): void {}

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
