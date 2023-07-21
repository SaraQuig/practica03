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
      informacionAdicional: 'Información adicional de vivienda...',
      imagen: '../assets/vivienda.jpg'
    },
    {
      gasto: 'Salud',
      descripcion: 'Salud',
      informacionAdicional: 'Información adicional de salud...',
      imagen: '../assets/salud.jpg'
    },
    {
      gasto: 'Educación',
      descripcion: 'Educación',
      informacionAdicional: 'Información adicional de educación...',
      imagen: '../assets/educacion.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  informacion(deducible: any) {
    alert('Esta es información adicional sobre ' + deducible.gasto + ':\n' + deducible.informacionAdicional);
  }

  borrarDeducible(deducible: any) {
    const index = this.deducibles.indexOf(deducible);
    if (index !== -1) {
      this.deducibles.splice(index, 1);
    }
  }
}
