import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-users-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
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

  onSubmit(): void{
    console.log('Butt on clicked hihihi', this.user);
  }

}
