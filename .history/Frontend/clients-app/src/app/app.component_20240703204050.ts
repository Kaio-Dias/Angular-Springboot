import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { UsersService } from './users.service';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import {TemplateModule} from './template/template.module';
import {UsersModule} from './users/users.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ 
    RouterOutlet, 
    HomeComponent, 
    TemplateModule, 
    UsersModule,
    HttpClientModule
  ],
  providers:[
    UsersService
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clients-app';
}
