import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusReportComponent } from './components/bus-report/bus-report.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { TableStructureComponent } from './components/table-structure/table-structure.component';
import { HttpClientModule } from '@angular/common/http';
import { BusReportService } from './services/bus-report.service'


@NgModule({
  declarations: [
    AppComponent,
    BusReportComponent,
    ToggleComponent,
    TableStructureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    BusReportService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
