import { Routes } from '@angular/router';
import { UsersFormComponent } from './users/users-form/users-form.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'users-form', component: UsersFormComponent }
];
