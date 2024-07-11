import { Routes } from '@angular/router';
import { UsersFormComponent } from './users/users-form/users-form.component';
import { HomeComponent } from './home/home.component';
import { UsersListComponent } from './users/users-list/users-list.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'users-form', component: UsersFormComponent },
    { path: 'users-form/:id', component: UsersFormComponent},
    { path: 'users-list', component: UsersListComponent },
    
];
