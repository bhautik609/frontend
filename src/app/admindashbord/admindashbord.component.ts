import { Component,OnInit} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
// import { ChartDataSets, ChartOptions, ChartType} from 'chart.js';
// import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, Color } from 'ng2-charts';
// import { AdmindashbordService } from '../admindashbord.service';
@Component({
  selector: 'app-admindashbord',
  templateUrl: './admindashbord.component.html',
  styleUrls: ['./admindashbord.component.css']
})
export class AdmindashbordComponent implements OnInit {
// username:String;
// chart=[];
//   /** Based on the screen size, switch from standard to one column per row */
//   cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
//     map(({ matches }) => {
//       if (matches) {
//         return [
//           { title: 'Card 1', cols: 1, rows: 1 },
//           { title: 'Card 2', cols: 1, rows: 1 },
//           { title: 'Card 3', cols: 1, rows: 1 },
//           { title: 'Card 4', cols: 1, rows: 1 }
//         ];
//       }

//       return [
//         { title: 'Card 1', cols: 2, rows: 1 },
//         { title: 'Card 2', cols: 1, rows: 1 },
//         { title: 'Card 3', cols: 1, rows: 2 },
//         { title: 'Card 4', cols: 1, rows: 1 }
//       ];
//     })
//   );

  
//   public pieChartOptions: ChartOptions = {
//     responsive: true,
//   };
//   public pieChartLabels: Label[] = [['leptop', 'Sales'], ['mobail','Sales'], 'tv Sales'];
//   public pieChartData: SingleDataSet = [300, 500, 100];
//   public pieChartType: ChartType = 'pie';
//   public pieChartLegend = true;
//   public pieChartPlugins = [];
//   customerCount: number;
//   TodaysCOH: number;
//   feedbackCount: number;
//   TodaysOrder: number;
  
   constructor(private breakpointObserver: BreakpointObserver) {
//     monkeyPatchChartJsTooltip();
//     monkeyPatchChartJsLegend();
   }
//   public barChartOptions: ChartOptions = {
//     responsive: true,
//   };
//   public barChartLabels: Label[] = ['JAN', 'FEB', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY'];
//   public barChartType: ChartType = 'bar';
//   public barChartLegend = true;
//   public barChartPlugins = [];

//   public barChartData: ChartDataSets[] = [
//     { data: [65, 59, 80, 81, 56, 55, 40], label: 'leptop' },
//     { data: [28, 48, 40, 19, 86, 27, 90], label: 'mobail' },
//     { data: [30, 19, 20, 25, 80, 88, 40], label: 'tv' }
//   ];
  
  ngOnInit(): void{
//     this.username=localStorage.getItem("username");
    
     }
 }
