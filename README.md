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
<<<<<<< HEAD

En este ejemplo, el servicio EstadoService contiene un BehaviorSubject que permite emitir valores y compartir el estado entre diferentes componentes de la aplicación. Los componentes pueden suscribirse a este Observable para reaccionar a los cambios en el estado.
=======
>>>>>>> 2b50cfc7736fb939caf5134300612efd554bf7c5
