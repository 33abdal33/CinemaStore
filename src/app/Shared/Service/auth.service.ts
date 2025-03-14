import { inject, Injectable, signal } from '@angular/core';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import { ForgotPasswordApiResponse, ForgotPasswordRequestBody, LoginApiResponse, LoginRequestBody, RegisterApiResponse, RegisterRequestBody } from '../models/auth.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { NotificationsService } from 'angular2-notifications';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private baseUrl = environment.baseUrl;
  loggedIn = signal(false);
  isAdministrator = signal(false);

  login(email: string, password: string): Observable<LoginApiResponse> {
    const apiUrl = this.baseUrl + '/api/users/Login';
    const body: LoginRequestBody = { username: email, password };
    return this.http.post<LoginApiResponse>(apiUrl, body).pipe(
      catchError((httpErrorResponse: HttpErrorResponse) => {
        const errorResponse: LoginApiResponse = {
          success: false,
          data: { expirationDate: '', token: '' },
          errorMessage: httpErrorResponse.error.errorMessage || 'Unknown error',
        };
        return of(errorResponse);
      })
    );
  }

  notifications = inject(NotificationsService)

  logout() {
    localStorage.clear();
    this.loggedIn.set(false);
    this.isAdministrator.set(false);
    this.notifications.success('Logout exitoso', 'Hasta luego');
  }

  verifyLocalStorage() {
    const token = localStorage.getItem('token');
    this.loggedIn.set(token ? true : false);

    const isAdministrator = localStorage.getItem('isAdministrator');
    this.isAdministrator.set(isAdministrator === 'true');
  }

  register(body: RegisterRequestBody): Observable<RegisterApiResponse> {
    const apiUrl = this.baseUrl + '/api/users/register';
    return this.http.post<RegisterApiResponse>(apiUrl, body).pipe(
      catchError((httpErrorResponse: HttpErrorResponse) => {
        const errorResponse: RegisterApiResponse = {
          success: false,
          data: { expirationDate: '', token: '', userId: '' },
          errorMessage: httpErrorResponse.error.errorMessage || 'Unknown error',
        };
        return of(errorResponse);
      })
    );
  }

  forgotPassword(email: string): Observable<ForgotPasswordApiResponse> {
    const apiUrl = this.baseUrl + '/api/users/RequestTokenToResetPassword';
    const body: ForgotPasswordRequestBody = { email };
    return this.http.post<ForgotPasswordApiResponse>(apiUrl, body).pipe(
      catchError((httpErrorResponse: HttpErrorResponse) => {
        const errorResponse: ForgotPasswordApiResponse = {
          success: false,
          errorMessage:
            httpErrorResponse.error?.errorMessage || 'Unknown error',
        };
        return of(errorResponse);
      })
    );
  }
}
