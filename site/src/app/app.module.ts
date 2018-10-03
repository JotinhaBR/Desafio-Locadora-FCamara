import { routing } from './app-routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponentPainel } from './painel/pages/home/home.component';
import { FindComponent } from './painel/pages/user/find/find.component';
import { TopComponent } from './itens-p/navbar/top/top.component';
import { LeftComponent } from './painel/itens/navbar/left/left.component';
import { HomeComponent } from './client/pages/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisteUserComponent } from './user/registe-user/registe-user.component';
import { RecoverPasswordComponent } from './user/recover-password/recover-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentPainel,
    FindComponent,
    TopComponent,
    LeftComponent,
    HomeComponent,
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
