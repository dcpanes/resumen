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
        this.persistenciaService.setItemLS('personajes', JSON.stringify(personajes));
      })
    )
  }
}
