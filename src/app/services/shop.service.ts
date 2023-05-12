import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Watches } from '../models/Watches';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  private url: string = 'http://localhost:3000/rm';
  constructor(private http: HttpClient) {}
  getWatches(): Observable<Watches[]> {
    return this.http.get<Watches[]>(this.url);
  }
}
