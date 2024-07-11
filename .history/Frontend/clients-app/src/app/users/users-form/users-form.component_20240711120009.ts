import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UserModel } from '../UserModel';
import { UsersService } from '../../users.service'
import { response} from 'express';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router'

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
  id: number = 0;

  constructor(private usersService: UsersService,
    private router:Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let params = this.activatedRoute.params
    if(params && params.value && params.value.id){
      this.id = params.value.id;
      this.service
      .getUsersById(this.id)
      .subscribe(
        response => this.user = response ,
        errorResponse => this.user= new UserModel()
      )
    }
    
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
