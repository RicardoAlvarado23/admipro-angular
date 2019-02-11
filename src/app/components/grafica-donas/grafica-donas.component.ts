import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafica-donas',
  templateUrl: './grafica-donas.component.html',
  styles: []
})
export class GraficaDonasComponent implements OnInit {
  @Input() doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input() doughnutChartData: number[] = [350, 450, 100];
  @Input() doughnutChartType: string = 'doughnut';
  @Input() leyenda: string = 'Leyenda';

  constructor() { }

  ngOnInit() {
  }

}
