import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { catchError, Observable, of } from 'rxjs';
import { BuyApiResponse, BuyRequestBody } from '../../Shared/models/buy.model';

@Injectable({
  providedIn: 'root'
})
export class BuyService {
  private http = inject(HttpClient);
  private baseUrl = environment.baseUrl;

  loading = signal(false);

  buy(movieId: string, ticketsQuantity: string): Observable<BuyApiResponse> {
    const apiUrl = this.baseUrl + '/api/Sales';
    const body: BuyRequestBody = { movieId, ticketsQuantity };
    return this.http.post<BuyApiResponse>(apiUrl, body).pipe(
      catchError((httpErrorResponse: HttpErrorResponse) => {
        const errorResponse: BuyApiResponse = {
          data: 0,
          success: false,
          errorMessage: httpErrorResponse.error.errorMessage || 'Unknown error',
        };
        return of(errorResponse);
      })
    );
  }
}
