import { Component, inject } from '@angular/core';
import { SimpleHeaderComponent } from "../Shared/components/simple-header/simple-header.component";
import { FooterComponent } from "../Shared/components/footer/footer.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../Shared/Service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SimpleHeaderComponent, FooterComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  authService = inject(AuthService);
  router = inject(Router);

  login() {
    const email = this.loginForm.controls.email.value!;
    const password = this.loginForm.controls.password.value!;
    this.authService.login(email, password).subscribe((response) => {
      if (response && response.success) {
        localStorage.setItem('token', response.data.token);
        this.authService.loggedIn.set(true);
        alert('Login Exitoso' + '\n' + 'Bienvenido a CineMax');
        const isAdministrator = email === 'admin@gmail.com';
        this.authService.isAdministrator.set(isAdministrator);
        localStorage.setItem('isAdministrator', isAdministrator.toString());
        this.router.navigate([isAdministrator ? '/admin' : '/customer']);
      } else {
        alert('Login Fallido' + '\n' + 'Revisa tus credenciales');
      }
    });
  }
};
