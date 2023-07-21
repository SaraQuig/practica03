import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InformacionComponent } from './informacion/informacion.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ReporteComponent } from './reporte/reporte.component';
import { HttpClientModule } from '@angular/common/http';
import { GastoService } from './gasto.service';
import { UsuarioService } from './usuario.service';
import { UsuarioComponent } from './usuario/usuario.component';


const rutas:Route[]=[
{path:'informacion', component:InformacionComponent},
{path:'registro', component:FormularioComponent},
{path:'reporte', component:ReporteComponent},
{path:'usuarios', component:UsuarioComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InformacionComponent,
    FormularioComponent,
    ReporteComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rutas),
    HttpClientModule
  ],
  providers: [GastoService,UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
