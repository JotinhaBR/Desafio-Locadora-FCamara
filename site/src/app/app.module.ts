import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FindComponent } from './painel/pages/user/find/find.component';
import { LeftComponent } from './painel/itens/navbar/left/left.component';
import { LoginComponent } from './user/login/login.component';
import { RegisteUserComponent } from './user/registe-user/registe-user.component';
import { RecoverPasswordComponent } from './user/recover-password/recover-password.component';
import { ClientHomeComponent } from './client/pages/home/home.component';
import { PainelHomeComponent } from './painel/pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientHomeComponent,
    FindComponent,
    LeftComponent,
    PainelHomeComponent,
    LoginComponent,
    RegisteUserComponent,
    RecoverPasswordComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
