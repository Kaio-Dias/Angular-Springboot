import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { User } from '../user';
import { UsersService } from '../../users.service'

@Component({
  selector: 'app-users-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {

  user: User;

  constructor(private usersService: UsersService) {
    this.user = new User(1, 'John Doe', '123.456.789-00', '2023-01-01');
  }

  ngOnInit(): void {}

  onSubmit(): void{
    console.log('Butt on clicked hihihi', this.user);
    this.usersService.addUser(this.user);
  }

}
