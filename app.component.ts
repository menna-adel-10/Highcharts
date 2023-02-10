import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { donutChartOptions } from './helpers/donutChartOptions';
import { areaChartOptions } from './helpers/areaChartOptions';
import { barChartOptions } from './helpers/barChartOptions';
import { oneLineBarOptions } from './helpers/oneLineBarOptions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  donutChart = new Chart(donutChartOptions);
  areaChart = new Chart(areaChartOptions);
  barChart = new Chart(barChartOptions);
  oneLineBar = new Chart(oneLineBarOptions);
}  
