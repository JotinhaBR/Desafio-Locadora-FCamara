import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientHomeComponent } from './client/pages/home/home.component';
import { PainelHomeComponent } from './painel/pages/home/home.component';
import { ClientNavbarTopComponent } from './client/itens/navbar/top/top.component';
import { PainelUserFindComponent } from './painel/pages/user/find/find.component';
import { PainelNavbarLeftComponent } from './painel/itens/navbar/left/left.component';
import { UserLoginComponent } from './user/login/login.component';
import { UserRegisteUserComponent } from './user/registe-user/registe-user.component';
import { UserRecoverPasswordComponent } from './user/recover-password/recover-password.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientHomeComponent,
    PainelUserFindComponent,
    PainelNavbarLeftComponent,
    PainelHomeComponent,
    UserLoginComponent,
    UserRegisteUserComponent,
    ClientNavbarTopComponent,
    UserRecoverPasswordComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
