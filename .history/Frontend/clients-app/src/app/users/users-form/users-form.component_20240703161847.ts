import { Component, OnInit } from '@angular/core';

import { User } from '../user';

@Component({
  selector: 'app-users-form',
  standalone: true,
  imports: [],
  templateUrl: './users-form.component.html',
  styleUrl: './users-form.component.css'
})
export class UsersFormComponent implements OnInit {

  user: User;

  constructor(){
    this.user = {
      id: 0,
      username: 'Kaio',
      cpf: '',
      registered_date: ''
    };
  }

  ngOnInit(): void {
      
  }

}
