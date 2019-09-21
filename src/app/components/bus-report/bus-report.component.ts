import { Component, OnInit } from '@angular/core';
import { BusReportService } from '../../services/bus-report.service'

@Component({
  selector: 'app-bus-report',
  templateUrl: './bus-report.component.html',
  styleUrls: ['./bus-report.component.scss']
})
export class BusReportComponent implements OnInit {
  reports;
  busData;

  constructor(private busReportService: BusReportService) { }

  ngOnInit() {
    
  }

}
