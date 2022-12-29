import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SearchTrains } from '../model/search-trains';
import { Station } from '../model/station';
import { Ticket } from '../model/ticket';
import { Train } from '../model/train';

const baseUrl = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root',
})
export class TrainService {
  constructor(private http: HttpClient) {}

  getAllTrains(params?: any): Observable<SearchTrains> {
    let options = {};
    if (params) {
      options = {
        params: new HttpParams().set(
          'filter',
          (params.filter && JSON.stringify(params.filter)) || ''
        ),
      };
    }

    return this.http.get(`${baseUrl}/trains`, options).pipe(
      map((data: any) => {
        return new SearchTrains(data);
      })
    );
  }

  getStations(): Observable<Station[]> {
    return this.http.get(`${baseUrl}/stations`).pipe(
      map((data: any) => {
        return data && data.map((elem: any) => new Station(elem));
      })
    );
  }

  getTrain(trainId: number): Observable<Train> {
    return this.http.get(`${baseUrl}/trains/${trainId}`).pipe(
      map((data: any) => {
        return new Train(data);
      })
    );
  }

  postTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.post(`${baseUrl}/tickets`, ticket).pipe(
      map((elem: any) => {
        return new Ticket(elem);
      })
    );
  }

  getTickets(params?: any): Observable<Ticket[]> {
    let options = {};
    if (params) {
      options = {
        params: new HttpParams()
          .set('sort', params.sort || '')
          .set('sortDirection', params.sortDirection || ''),
      };
    }
    return this.http.get(`${baseUrl}/tickets`, options).pipe(
      map((data: any) => {
        return (
          (data && data.results.map((elem: any) => new Ticket(elem))) || []
        );
      })
    );
  }

  deleteTicket(ticketId: number): Observable<Ticket> {
    return this.http.delete(`${baseUrl}/tickets/${ticketId}`).pipe(
      map((data: any) => {
        return new Ticket(data);
      })
    );
  }
}
