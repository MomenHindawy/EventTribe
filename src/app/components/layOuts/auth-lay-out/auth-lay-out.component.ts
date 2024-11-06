import { Component } from '@angular/core';
import { NavbarAuthComponent } from "../../navbar/navbar-auth/navbar-auth.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-lay-out',
  standalone: true,
  imports: [RouterOutlet, NavbarAuthComponent, FooterComponent],
  templateUrl: './auth-lay-out.component.html',
  styleUrl: './auth-lay-out.component.scss'
})
export class AuthLayOutComponent {

}
