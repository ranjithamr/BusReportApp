import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusReportComponent } from './components/bus-report/bus-report.component';
import { TableStructureComponent } from './components/table-structure/table-structure.component';
import { HttpClientModule } from '@angular/common/http';
import { BusReportService } from './services/bus-report.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BoldStringPipe } from './pipes/bold-string-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BusReportComponent,
    TableStructureComponent,
    BoldStringPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [
    BusReportService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
