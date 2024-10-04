import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ConectarApiModule } from '../conectar-api/conectar-api.module';
import { TituloPaginaComponent } from '../titulo-pagina/titulo-pagina.component';
import { HttpClientModule } from '@angular/common/http';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ConectarApiModule,
    HttpClientModule
  ],
  declarations: [HomePage, TituloPaginaComponent]
})
export class HomePageModule {}
