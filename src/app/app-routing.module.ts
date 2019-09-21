import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusReportComponent } from './components/bus-report/bus-report.component';

const routes: Routes = [
  { path: '', component: BusReportComponent },
  { path: 'bus-report', component: BusReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
