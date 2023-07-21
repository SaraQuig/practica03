import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {
  deducibles = [
    {
      gasto: 'Vivienda',
      descripcion: 'Vivienda',
      imagen: '../assets/vivienda.jpg'
    },
    {
      gasto: 'Salud',
      descripcion: 'Salud',
      imagen: '../assets/salud.jpg'
    },
    {
      gasto: 'Educación',
      descripcion: 'Educación',
      imagen: '../assets/educacion.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  informacion(deducible: any) {
    alert('Esta es información adicional sobre ' + deducible.gasto );
  }

  borrarDeducible(deducible: any) {
    const index = this.deducibles.indexOf(deducible);
    if (index !== -1) {
      this.deducibles.splice(index, 1);
    }
  }
}
