import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { EventDetailApiResponse } from '../../Shared/models/event-detail.model';

@Injectable({
  providedIn: 'root'
})

export class EventDetailService {
  private http = inject(HttpClient);

  private baseUrl = environment.baseUrl;

  getData(id: string): Observable<EventDetailApiResponse> {
    const apiUrl = this.baseUrl + '/api/movies/' + id;
    return this.http.get<EventDetailApiResponse>(apiUrl);
  }
}
