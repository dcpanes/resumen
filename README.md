# Guía de Angular: Manejo de Estado, Persistencia y Conexión a una API

Este documento proporciona una guía básica sobre cómo manejar el estado, persistencia y la conexión a una API en una aplicación Angular.

## 1. Manejo de Estado en Angular

El **manejo de estado** en Angular se refiere a cómo compartimos y gestionamos datos entre los diferentes componentes de la aplicación. Angular ofrece varias formas de manejar el estado, siendo una de las más comunes el uso de **servicios** combinados con **Observables** como `BehaviorSubject`.

### Ejemplo de manejo de estado con `BehaviorSubject`:
```typescript
// servicio de manejo de estado
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

En este ejemplo, el servicio EstadoService contiene un BehaviorSubject que permite emitir valores y compartir el estado entre diferentes componentes de la aplicación. Los componentes pueden suscribirse a este Observable para reaccionar a los cambios en el estado.

## 2. Persistencia

La persistencia de datos se refiere a la capacidad de almacenar y recuperar datos incluso después de cerrar o refrescar la aplicación. En Angular, se puede lograr mediante el uso de localStorage o sessionStorage del navegado.

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PersistenciaService {
  setItemLS(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  getItemLS(key: string) {
    return localStorage.getItem(key);
  }

  removeItemLS(key: string) {
    localStorage.removeItem(key);
  }

  clearLS() {
    localStorage.clear();
  }

  setItemSS(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }

  getItemSS(key: string) {
    return sessionStorage.getItem(key);
  }

  removeItemSS(key: string) {
    sessionStorage.removeItem(key);
  }

  clearSS() {
    sessionStorage.clear();
  }

}

3. Conexión a una API en Angular

La conexión a una API en Angular se realiza mediante el servicio HttpClient, que permite enviar peticiones HTTP (GET, POST, PUT, DELETE, etc.) a un servidor.
// Modulo
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConectarApiComponent } from './conectar-api.component';
import { IonicModule } from '@ionic/angular';
import { DragonBallApiService } from './service/dragon-ball-api.service';



@NgModule({
  declarations: [ConectarApiComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  providers: [
    DragonBallApiService
  ],
  exports: [ConectarApiComponent]
})
export class ConectarApiModule { }

// Servicio

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDragonBallApi } from '../interfaces/dragron-ball-api-response.interface';
import { map, Observable, tap } from 'rxjs';
import { IPersonaje } from '../interfaces/personaje.interface';
import { PersistenciaService } from 'src/app/persistencia/persistencia.service';

@Injectable({
  providedIn: 'root'
})
export class DragonBallApiService {

  constructor(
    private readonly http:HttpClient,
    private readonly persistenciaService:PersistenciaService
  ) { }

  getPersonajes():Observable<IPersonaje[]>{
    return this.http.get<IDragonBallApi>('https://dragonball-api.com/api/characters')
    .pipe(
      map((resp:IDragonBallApi) => resp.items),
      tap((personajes:IPersonaje[]) => {
        this.persistenciaService.setItemLS('personajes', JSON.stringify(personajes)); // esta generando persistencia
      })
    )
  }
}

// Uso del servicio

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



