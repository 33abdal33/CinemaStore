import { Component, inject } from '@angular/core';
import { HomeComponent } from './Home/home.component';
import { LoginComponent } from "./login/login.component";
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { AuthService } from './Shared/Service/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CinemaStore';
}
