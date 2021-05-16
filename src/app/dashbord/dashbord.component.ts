import { Component, OnInit, ViewChild } from '@angular/core';
import { AdmindashbordService } from '../admindashbord.service';
import { HomeService } from './home.service';
import { LegendLabelsContentArgs } from '@progress/kendo-angular-charts';
import { IntlService } from '@progress/kendo-angular-intl';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TopProducts } from './topproduct';
import { ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, Color } from 'ng2-charts';
import { BreakpointObserver } from '@angular/cdk/layout';
 declare var require: any;
 var dateFormat = require('dateformat');
 var now = new Date();
class model {
  constructor(public kind: string, public share: number) { }
}

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  topProductarr: TopProducts[] = [];
  dataSource: MatTableDataSource<TopProducts>;
  displayedColumns: string[] = ['product_id_fk', 'product_name', 'total'];
  count = [];
  c = [];
  type = ['Customer', 'Member Customer'];
  public monthOrderCount: any[] = [];
  public orderData: any[] = [];
  public months: any[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  startyr: number = 2021;
  public DonutData: any[] = [];
  currentYear = now.getFullYear();
  selectedYear: number = 2021;
  yaerArray = [];
  customerCount: number;
  TodaysCOH: number;
  feedbackCount: number;
  TodaysOrder: number;
  public data: model[] = [];
  public pieData: any[] = [];
  public pieChartOptions: ChartOptions = {
         responsive: true,
     };
  public pieChartLabels: Label[] = [['paking'], ['on the way'], 'deliverd'];
  public pieChartData: SingleDataSet = [300,200,100];
   public pieChartType: ChartType = 'pie';
   public pieChartLegend = true;
   public pieChartPlugins = [];

  public labelContent(e: any): string {
    return e.category;
  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  
  
constructor(private _dashbord:HomeService,private intl: IntlService,private breakpointObserver: BreakpointObserver){
  this.labelContent1 = this.labelContent1.bind(this);
    this.dataSource = new MatTableDataSource();
    monkeyPatchChartJsTooltip();
   monkeyPatchChartJsLegend();
}
applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
  
  ngOnInit(): void {
    this._dashbord.getTotalCutomer().subscribe(
      (dataCustomerCount: any) => {
        console.log(dataCustomerCount);
        this.customerCount = dataCustomerCount[0].Total_Customers;
      }
    );
    this._dashbord.getTodaysCash().subscribe(
      (dataTodayCashCount: any) => {
        console.log(dataTodayCashCount);
        this.TodaysCOH = dataTodayCashCount[0].total;

      }
    );
    this._dashbord.getTotalFeedback().subscribe(
      (dataFeedbackCount: any) => {
        console.log(dataFeedbackCount);
        this.feedbackCount = dataFeedbackCount[0].Feedbacks;
      }
    );
    this._dashbord.getTodaysOrderCount().subscribe(
      (dataTodaysOrderCount: any) => {
        console.log(dataTodaysOrderCount);
        this.TodaysOrder = dataTodaysOrderCount[0].Today_Orders;
      }
    );
    this._dashbord.getAllSimpleCustomer().subscribe((data1: any[]) => {
      this.count = data1;
      for (let i = 0; i < data1.length; i++) {
        this.c.push(this.count[i].simpleCustomer);
        this.c.push(this.count[i].memberCount);
      }
    });
    this._dashbord.getStatus().subscribe((data3: any[]) => {
      console.log(data3);
      this.DonutData = data3;
      for (let i = 0; i < data3.length; i++) {
        this.pieData = [
          { category: 'Delivered', value: this.DonutData[i].Delivered },
          { category: 'Packing', value: this.DonutData[i].Packing },
          { category: 'On The Way', value: this.DonutData[i].On_The_Way },
        ];
        
      }

    });
    this._dashbord.getOrder(this.selectedYear).subscribe((data2: any[]) => {
      console.log(data2);
      this.monthOrderCount = data2;
      for (let j = 0; j < data2.length; j++) {
        this.orderData.push(this.monthOrderCount[j].COUNT);
      }
    });
    this._dashbord.getTopProducts().subscribe(
      (data4: TopProducts[]) => {
        console.log(data4);
        this.topProductarr = data4;
        this.dataSource.data = this.topProductarr;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      }
    );
    // this._dashbord.getOrder(this.selectedYear).subscribe((data2: any[]) => {
    //   this.monthOrderCount = data2;
    //   for (let j = 0; j < data2.length; j++) {
    //     this.orderData.push(this.monthOrderCount[j].COUNT);
    //   }
    // });

  }
  public labelContent1(args: LegendLabelsContentArgs): string {
    return `${args.dataItem.category} value: ${this.intl.formatNumber(args.dataItem.value, '')}`;
  }
  }

