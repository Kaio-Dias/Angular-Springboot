import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { UsersRoutingModule } from './users-routing.module';
import { UsersFormComponent } from './users-form/users-form.component';
import { UsersListComponent } from './users-list/users-list.component';


@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    CommonModule,
    UsersRoutingModule,
    UsersFormComponent,
  ],
  exports:[
    UsersFormComponent
  ]
})
export class UsersModule { }
