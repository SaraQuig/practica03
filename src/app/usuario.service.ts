import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Usuario } from './Usuario';
const configUrl = 'assets/datosUser.json';
@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    constructor(private httpclient: HttpClient) {
        console.log('El servicio Http esta funcionando para Usuario…')
    }
    obtenerDatos() {
    return this.httpclient.get<Usuario[]>(configUrl);
    }
}
