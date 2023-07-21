import { Component, OnInit } from '@angular/core';
import { GastoService } from '../gasto.service';
import { Gasto } from '../Gasto';
@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  gastos: Gasto[] = [];
  constructor(private gastoService: GastoService) {
    this.gastoService.obtenerDatos().subscribe(data => {
      console.log(data);
      this.gastos = data;
    });

  }
  ngOnInit(): void { }
}
