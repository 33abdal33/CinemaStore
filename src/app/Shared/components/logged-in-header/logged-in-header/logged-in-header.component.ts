import { Component, inject } from '@angular/core';
import { AuthService } from '../../../Service/auth.service';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-logged-in-header',
  standalone: true,
  imports: [RouterLink, MatButtonModule],
  templateUrl: './logged-in-header.component.html',
  styleUrl: './logged-in-header.component.css'
})
export class LoggedInHeaderComponent {
  authService = inject(AuthService);
}
