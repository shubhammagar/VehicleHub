import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VehicleModel } from '../models/vehicle-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private baseUrl = 'http://localhost:3000/api/vehicles';

  constructor(private http: HttpClient) {}

  getAll(): Observable<VehicleModel[]> {
    return this.http.get<VehicleModel[]>(this.baseUrl);
  }

  getById(id: number): Observable<VehicleModel> {
    return this.http.get<VehicleModel>(`${this.baseUrl}/${id}`);
  }
}