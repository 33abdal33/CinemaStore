import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { HomeApiResponse } from './home.model';
import { catchError, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url = 'https://cinemastore.azurewebsites.net/api/Home';

  http = inject(HttpClient);

  getData() {
    return this.http.get<HomeApiResponse>(this.url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('Error encontrado!');
        console.log('Codigo de error: ' + error.status)
        return EMPTY;
      })
    );
  }

}
