import { Component, OnInit } from '@angular/core';
import { BusReportService } from '../../services/bus-report.service';

@Component({
  selector: 'app-bus-report',
  templateUrl: './bus-report.component.html',
  styleUrls: ['./bus-report.component.scss']
})
export class BusReportComponent implements OnInit {
  reports;

  constructor(private busReportService: BusReportService) { }

  ngOnInit() {
    this.getBusReports();
  }

  getBusReports() {
    return this.busReportService.fetchBusReports().subscribe((reports: any) => {
      console.log(reports);
      this.reports = reports.data;
    })
  }
}
