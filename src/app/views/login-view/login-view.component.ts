import { Component } from '@angular/core';
import { NavComponent } from "../../components/nav/nav.component";
import { LoginComponent } from "../../components/login/login.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-login-view',
  standalone: true,
  imports: [NavComponent, LoginComponent, FooterComponent],
  templateUrl: './login-view.component.html',
  styleUrl: './login-view.component.css'
})
export class LoginViewComponent {

}
