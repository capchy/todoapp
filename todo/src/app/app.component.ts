import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodobarComponent } from './todobar/todobar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TodobarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';
}
