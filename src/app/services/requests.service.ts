import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get<any[]>('https://my-json-server.typicode.com/james-delivery/frontend-challenge/establishments').pipe(retry(2));
  }
}
