import { Component, inject } from '@angular/core';
import { AuthService } from '../../../Service/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logged-in-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './logged-in-header.component.html',
  styleUrl: './logged-in-header.component.css'
})
export class LoggedInHeaderComponent {
  authService = inject(AuthService);
}
