import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-emily',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './emily.component.html',
  styleUrl: './emily.component.scss'
})
export class EmilyComponent {

}
