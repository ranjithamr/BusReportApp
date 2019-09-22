import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { BusReportService } from './bus-report.service';
import { Observable } from 'rxjs';

describe('BusReportService', () => {
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;
  let busReportService: BusReportService;
  
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [ BusReportService ]
  }));

  beforeEach(() => {
    httpClient = TestBed.get(HttpClient);
    httpMock = TestBed.get(HttpTestingController);
    busReportService = TestBed.get(BusReportService);
    spyOn(busReportService, 'fetchBusReports');
  });

  it('should be created', () => {
    const service: BusReportService = TestBed.get(BusReportService);
    expect(service).toBeTruthy();
  });

  it('should call the json to get the reports', async () => {
    await busReportService.fetchBusReports();
    expect(busReportService.fetchBusReports).toHaveBeenCalled();
  })

});
