import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarBlankComponent } from "./components/navbar/navbar-blank/navbar-blank.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarBlankComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'EventTribe';
}
