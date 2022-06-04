import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [],
})
export class DonaHttpComponent implements OnInit {
  public doughnutChartLabels: string[] = [
    // 'Download Sales',
    // 'In-Store Sales',
    // 'Mail-Order Sales',
    // 'Other',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      // {
      //   data: [350, 450, 100, 150],
      //   backgroundColor: ['#259DE8', '#27D9F2', '#2FDBC2'],
      // },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private graficasService: GraficasService) {}

  ngOnInit(): void {
    // this.graficasService.getUsuariosRedesSociales().subscribe((data) => {
    //   const labels = Object.keys(data);
    //   const values = Object.values(data);
    //   this.doughnutChartData.labels = labels;
    //   this.doughnutChartData.datasets.push({ data: values });
    // });
    this.graficasService
      .getUsuariosRedesSocialesDonaData()
      .subscribe(({ labels, values }) => {
        this.doughnutChartData.labels = labels;
        this.doughnutChartData.datasets.push({ data: values });
      });
  }
}
