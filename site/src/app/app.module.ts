import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClientHomeComponent } from './client/pages/home/home.component';
import { PainelHomeComponent } from './painel/pages/home/home.component';
import { ClientNavbarTopComponent } from './client/itens/navbar/top/top.component';
import { PainelUserFindComponent } from './painel/pages/user/find/find.component';
import { PainelNavbarLeftComponent } from './painel/itens/navbar/left/left.component';
import { UserLoginComponent } from './user/login/login.component';
import { UserRecoverPasswordComponent } from './user/recover-password/recover-password.component';
import { PainelNavbarTopComponent } from './painel/itens/navbar/top/top.component';
import { PainelPagesComponent } from './painel/pages/pages.component';
import { UserService } from './user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    ClientHomeComponent,
    PainelUserFindComponent,
    PainelNavbarLeftComponent,
    PainelHomeComponent,
    UserLoginComponent,
    ClientNavbarTopComponent,
    UserRecoverPasswordComponent,
    PainelNavbarTopComponent,
    PainelPagesComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
