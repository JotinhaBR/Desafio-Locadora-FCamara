import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FindComponent } from './painel/pages/user/find/find.component';
import { LeftComponent } from './painel/itens/navbar/left/left.component';
import { TopComponent } from './client/itens/navbar/top/top.component';
import { ClientHomeComponent } from './client/pages/home/home.component';
import { PainelHomeComponent } from './painel/pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PainelHomeComponent,
    FindComponent,
    LeftComponent,
    ClientHomeComponent,
    TopComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
