import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HotelModel } from './hotel/hotel.model';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  getHotels(): Observable<HotelModel[]> {
    return this.httpClient.get<HotelModel[]>('assets/hotel-data.json');
  }
}
