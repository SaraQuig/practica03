import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../Usuario';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarios: Usuario[] = [];
  constructor(private usuarioService: UsuarioService) {
    this.usuarioService.obtenerDatos().subscribe(data => {
      console.log(data);
      this.usuarios = data;
    });

  }
  ngOnInit(): void { }
}
