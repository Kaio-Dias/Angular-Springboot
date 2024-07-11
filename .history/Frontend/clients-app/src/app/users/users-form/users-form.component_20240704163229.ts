import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UserModel } from '../UserModel';
import { UsersService } from '../../users.service'
import { response } from 'express';

@Component({
  selector: 'app-users-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {
  
  user: UserModel;
  success: boolean = false;

  constructor(private usersService: UsersService) {
    this.user = new UserModel(1, 'John Doe', '12345678900', new Date());
  }

  ngOnInit(): void {}

  onSubmit(): void{
    console.log('Butt on clicked hihihi', this.user);
    this.usersService.save(this.user).subscribe(response => {
      this.success = true;
    })
  }

}
