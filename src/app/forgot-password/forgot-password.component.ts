import { Component } from '@angular/core';
import { SimpleHeaderComponent } from "../Shared/components/simple-header/simple-header.component";
import { FooterComponent } from "../Shared/components/footer/footer.component";
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [SimpleHeaderComponent, FooterComponent, FormsModule, RouterLink],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  onSubmit(email: string) { }
}
