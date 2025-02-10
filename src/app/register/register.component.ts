import { Component, inject } from '@angular/core';
import { SimpleHeaderComponent } from "../Shared/components/simple-header/simple-header.component";
import { FooterComponent } from "../Shared/components/footer/footer.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../Shared/Service/auth.service';
import { RegisterRequestBody } from '../Shared/models/auth.model';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [SimpleHeaderComponent, FooterComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    documentType: new FormControl('', [Validators.required]),
    documentNumber: new FormControl('', [Validators.required])
  });

  authService = inject(AuthService);
  notifications = inject(NotificationsService);

  register() {
    const body: RegisterRequestBody = {
      documentNumber: this.registerForm.controls.documentNumber.value!,
      firsName: this.registerForm.controls.name.value!,
      lastName: this.registerForm.controls.lastName.value!,
      password: this.registerForm.controls.password.value!,
      email: this.registerForm.controls.email.value!,
      documentType: Number.parseInt(this.registerForm.controls.documentType.value!),
      age: Number.parseInt(this.registerForm.controls.age.value!),
      confirmPassword: this.registerForm.controls.password.value!,
    };

    this.authService.register(body).subscribe((response) => {
      console.log('response', response);

      if (response && response.success) {
        // Redirect to the customer page

        console.log('Register successful');
        this.notifications.success('Registro exitoso', 'Bienvenido');

      } else {
        // Display an error notification

        console.log('Register failed');
        this.notifications.warn('Registro fallido', 'Intenta otra vez');
      }
    });
  }
};
