import { Component, inject, OnInit } from '@angular/core';
import { HomeComponent } from './Home/home.component';
import { LoginComponent } from "./login/login.component";
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { AuthService } from './Shared/Service/auth.service';
import { NotificationsService, Options, SimpleNotificationsModule } from 'angular2-notifications';
import { timeout } from 'rxjs';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SimpleNotificationsModule, NgxSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CinemaStore';
  notificationOptions: Options = {
    position: ['top', 'right'],
    timeOut: 3000,

  };

  constructor() {
    const authService = inject(AuthService);
    authService.verifyLocalStorage();

  }

}
