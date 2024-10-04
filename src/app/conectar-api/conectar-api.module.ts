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
