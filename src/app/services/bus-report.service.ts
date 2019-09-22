import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BusReportService {

  constructor(private http: HttpClient) { }

  fetchBusReports() {
    return this.http.get('../../assets/data/bus-services-data.json');
  }
}
