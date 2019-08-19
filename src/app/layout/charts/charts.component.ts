import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';  // 1. ChartData
import { Color, BaseChartDirective, Label } from 'ng2-charts';
// import * as pluginAnnotations from 'chartjs-plugin-annotation';

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()]
})
export class ChartsComponent implements OnInit {

   /* ********** Graficos personalizados Roger Urbano ***************** */

   public lineChartData: ChartDataSets[] = [
      {data: [65, 246, 80, 300, 56, 742, 280], label: 'Angular'},
      {data: [28, 48, 40, 19, 86, 27, 90], label: 'React'},
      {data: [180, 480, 770, 90, 1000, 270, 400], label: 'Laravel'}
   ];

   public lineChartLabels: Label[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

   public lineChartOptions: any = {
      responsive: true,
   };

   public lineChartColors: Color[] = [
      { // Angular
         backgroundColor: 'rgba(255,0,0,0.2)',
         borderColor: '#FF0033',
         pointBackgroundColor: '#FF0033',
         pointBorderColor: '#fff',
         pointHoverBackgroundColor: '#fff',
         pointHoverBorderColor: '#FF0033'
      },
      { // React
         backgroundColor: 'rgba(0,153,51,0.2)',
         borderColor: '#009933',
         pointBackgroundColor: '#009933',
         pointBorderColor: '#fff',
         pointHoverBackgroundColor: '#fff',
         pointHoverBorderColor: '#009933'
      },
      { // Laravel
         backgroundColor: 'rgba(102,51,255,0.2)',
         borderColor: '#6633FF',
         pointBackgroundColor: '#6633FF',
         pointBorderColor: '#fff',
         pointHoverBackgroundColor: '#fff',
         pointHoverBorderColor: '#6633FF'
      }
   ];

   public lineChartLegend = true;
   public lineChartType = 'line';
   @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

   public randomize(): void {
      for (let i = 0; i < this.lineChartData.length; i++) {
         for (let j = 0; j < this.lineChartData[i].data.length; j++) {
            this.lineChartData[i].data[j] = this.generateNumber(i);
         }
      }
      this.chart.update();
   }

   private generateNumber(i: number) {
      return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
   }

   // events
   public chartClicked({event, active}: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
   }

   public chartHovered({event, active}: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
   }


   public pushOne() {
      this.lineChartData.forEach((x, i) => {
         const num = this.generateNumber(i);
         const data: number[] = x.data as number[];
         data.push(num);
      });
      this.lineChartLabels.push(`Agosto ${this.lineChartLabels.length}`);
   }

   public changeColor() {
      this.lineChartColors[2].borderColor = 'green';
      this.lineChartColors[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;
   }

   public changeLabel() {
      this.lineChartLabels[2] = ['1st Line', '2nd Line'];
      // this.chart.update();
   }


   // ********** GRAFICO DE BARRAS ********* //

   public barChartOptions: ChartOptions = {
      responsive: true,
      // We use these empty structures as placeholders for dynamic theming.
      scales: { xAxes: [{}], yAxes: [{}] },
      plugins: {
         datalabels: {
            anchor: 'end',
            align: 'end',
         }
      }
   };

   public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
   public barChartType: ChartType = 'bar';
   public barChartLegend = true;


   public barChartData: ChartDataSets[] = [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Ingeniería' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Programacion Web' }
   ];

   // events
   public chartClickedBar({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
   }

   public chartHoveredBar({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
   }

   public randomizeBar(): void {
      // Only Change 3 values
      const data = [
         Math.round(Math.random() * 100),
         59,
         80,
         (Math.random() * 100),
         56,
         (Math.random() * 100),
         40];
      this.barChartData[0].data = data;
   }



   constructor() {
   }


   ngOnInit() {
   }




   /* *************************** */
























   /* ********* chart default **********

    // bar chart
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels: string[] = [
        '2006',
        '2007',
        '2008',
        '2009',
        '2010',
        '2011',
        '2012'
    ];
    public barChartType: string;
    public barChartLegend: boolean;

    public barChartData: any[] = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series Z' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    ];

    // Doughnut
    public doughnutChartLabels: string[] = [
        'Download Sales',
        'In-Store Sales',
        'Mail-Order Sales'
    ];
    public doughnutChartData: number[] = [350, 450, 100];
    public doughnutChartType: string;

    // Radar
    public radarChartLabels: string[] = [
        'Eating',
        'Drinking',
        'Sleeping',
        'Designing',
        'Coding',
        'Cycling',
        'Running'
    ];
    public radarChartData: any = [
        { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
    ];
    public radarChartType: string;

    // Pie
    public pieChartLabels: string[] = [
        'Download Sales',
        'In-Store Sales',
        'Mail Sales'
    ];
    public pieChartData: number[] = [300, 500, 100];
    public pieChartType: string;

    // PolarArea
    public polarAreaChartLabels: string[] = [
        'Download Sales',
        'In-Store Sales',
        'Mail Sales',
        'Telesales',
        'Corporate Sales'
    ];
    public polarAreaChartData: number[] = [300, 500, 100, 40, 120];
    public polarAreaLegend: boolean;

    public polarAreaChartType: string;

    // lineChart
    public lineChartData: Array<any> = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
        { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
    ];
    public lineChartLabels: Array<any> = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July'
    ];
    public lineChartOptions: any = {
        responsive: true
    };
    public lineChartColors: Array<any> = [
        {
            // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        {
            // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        {
            // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend: boolean;
    public lineChartType: string;

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

    public randomize(): void {
        // Only Change 3 values
        const data = [
            Math.round(Math.random() * 100),
            59,
            80,
            Math.random() * 100,
            56,
            Math.random() * 100,
            40
        ];
        const clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
        //
        //  * (My guess), for Angular to recognize the change in the dataset
        //  * it has to change the dataset variable directly,
        //  * so one way around it, is to clone the data, change it and then
        //  * assign it;
        //
    }

     */

    // constructor() {}
    //
    // ngOnInit() {
    //     this.barChartType = 'bar';
    //     this.barChartLegend = true;
    //     this.doughnutChartType = 'doughnut';
    //     this.radarChartType = 'radar';
    //     this.pieChartType = 'pie';
    //     this.polarAreaLegend = true;
    //     this.polarAreaChartType = 'polarArea';
    //     this.lineChartLegend = true;
    //     this.lineChartType = 'line';
    // }


}
