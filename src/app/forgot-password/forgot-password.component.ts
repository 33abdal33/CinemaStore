import { Component, inject } from '@angular/core';
import { SimpleHeaderComponent } from "../Shared/components/simple-header/simple-header.component";
import { FooterComponent } from "../Shared/components/footer/footer.component";
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../Shared/Service/auth.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [SimpleHeaderComponent, FooterComponent, FormsModule, RouterLink],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  authService = inject(AuthService);
  onSubmit(email: string) {
    this.authService.forgotPassword(email).subscribe((response) => {
      console.log('response', response);
      if (response.success) {
        console.log('Success');
      } else {
        console.log('Fail');
      }
    });
  }
}
