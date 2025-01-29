import { Component } from '@angular/core';
import { HomeComponent } from './Home/home.component';
import { FooterComponent } from './Shared/components/footer/footer.component';
import { LoginComponent } from "./login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, FooterComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CinemaStore';
}
