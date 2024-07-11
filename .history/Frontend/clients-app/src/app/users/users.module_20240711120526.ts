import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { UsersRoutingModule } from './users-routing.module';
import { UsersFormComponent } from './users-form/users-form.component';
import { UsersListComponent } from './users-list/users-list.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    CommonModule,
    UsersRoutingModule,
    UsersFormComponent,
    UsersListComponent,
    RouterModule
  ],
  exports:[
    UsersFormComponent
  ]
})
export class UsersModule { }
