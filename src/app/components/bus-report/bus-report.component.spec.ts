import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BusReportComponent } from './bus-report.component';
import { BusReportService } from '../../services/bus-report.service';
import { Observable, of } from 'rxjs';

describe('BusReportComponent', () => {
  let component: BusReportComponent;
  let fixture: ComponentFixture<BusReportComponent>;
  let httpClient: HttpClient;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ BusReportComponent ],
      providers: [{provide: BusReportService, useValue: { fetchBusReports: () => of({}) }},
                  {provide: BusReportComponent, useValue: { getBusReports: () => of({}) }}],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    httpClient = TestBed.get(HttpClient);
    fixture = TestBed.createComponent(BusReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('busReportService call', () => {
    let busReportService;
    beforeEach(() => {
      busReportService = TestBed.get(BusReportService);
      spyOn(busReportService, 'fetchBusReports');
    });
    
    it('should get bus report data from busReportService', async () => {
      await busReportService.fetchBusReports();
      expect(busReportService.fetchBusReports).toHaveBeenCalled();
    })

    it('should get the correct json data', inject([HttpClient], (httpClient: HttpClient) => {
      const data = require('../../../assets/data/bus-services-data.json');    
      let busReportComponent;
      busReportComponent = TestBed.get(BusReportComponent);
      spyOn(httpClient, 'get').and.returnValue(of(data)); 
      busReportComponent.getBusReports().subscribe((result) => {
        expect(result[0]).toEqual(data[0]);
      });
    }))
  })
});
