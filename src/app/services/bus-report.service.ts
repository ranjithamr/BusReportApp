import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BusReportService {

  constructor(private http: HttpClient) { }

  fetchBusReports() {
    console.log(this.http.get('../../assets/data/bus-services-data.json'));
    return this.http.get('../../assets/data/bus-services-data.json');
  }

}
