import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  template: `<h1>Hello World!</h1>`,
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clients-app';
}
