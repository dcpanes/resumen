import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManejoEstadoService {

  private tituloPagina:BehaviorSubject<string> = new BehaviorSubject<string>('');

  getTituloPagina(){
    return this.tituloPagina.asObservable();
  }

  setTituloPagina(titulo:string){
    this.tituloPagina.next(titulo);
  }

}
