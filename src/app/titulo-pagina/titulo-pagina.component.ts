import { Component, inject, OnInit } from '@angular/core';
import { ManejoEstadoService } from '../manejo-estado/manejo-estado.service';
import { Observable, ObservedValueOf } from 'rxjs';

@Component({
  selector: 'app-titulo-pagina',
  templateUrl: './titulo-pagina.component.html',
  styleUrls: ['./titulo-pagina.component.scss'],
})
export class TituloPaginaComponent  implements OnInit {
  tituloPagina$:Observable<string>;
  manejoEstadoService = inject(ManejoEstadoService);
  constructor() {
    this.tituloPagina$ = this.manejoEstadoService.getTituloPagina();
  }

  ngOnInit() {}

}
