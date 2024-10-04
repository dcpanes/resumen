import { Component, inject, OnInit } from '@angular/core';
import { DragonBallApiService } from './service/dragon-ball-api.service';
import { Observable } from 'rxjs';
import { IPersonaje } from './interfaces/personaje.interface';
import { ManejoEstadoService } from '../manejo-estado/manejo-estado.service';

@Component({
  selector: 'app-conectar-api',
  templateUrl: './conectar-api.component.html',
  styleUrls: ['./conectar-api.component.scss'],
})
export class ConectarApiComponent {

  tituloPagina:string = 'Conectar API'; 
  dragonBallApiService = inject(DragonBallApiService);
  manejoEstadoService = inject(ManejoEstadoService);
  personajes$:Observable<IPersonaje[]>;  

  constructor() { 
    this.personajes$ = this.dragonBallApiService.getPersonajes();
    this.manejoEstadoService.setTituloPagina(this.tituloPagina);
  }

}
