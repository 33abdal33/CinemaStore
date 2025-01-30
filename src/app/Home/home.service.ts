import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url = 'https://cinemastore.azurewebsites.net/api/Home';

  http = inject(HttpClient);

  getData() {
    return this.http.get(this.url);
  }

}
