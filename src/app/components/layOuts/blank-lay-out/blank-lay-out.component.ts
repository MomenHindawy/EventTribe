import { Component } from '@angular/core';
import { NavbarBlankComponent } from "../../navbar/navbar-blank/navbar-blank.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-blank-lay-out',
  standalone: true,
  imports: [RouterOutlet, NavbarBlankComponent, FooterComponent],
  templateUrl: './blank-lay-out.component.html',
  styleUrl: './blank-lay-out.component.scss'
})
export class BlankLayOutComponent {

}
