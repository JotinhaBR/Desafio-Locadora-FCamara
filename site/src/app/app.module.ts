import { appRouting } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClientHomeComponent } from './client/pages/home/home.component';
import { PainelHomeComponent } from './painel/pages/home/home.component';
import { ClientNavbarTopComponent } from './client/itens/navbar/top/top.component';
import { PainelNavbarLeftComponent } from './painel/itens/navbar/left/left.component';
import { UserLoginComponent } from './user/login/login.component';
import { UserRecoverPasswordComponent } from './user/recover-password/recover-password.component';
import { PainelNavbarTopComponent } from './painel/itens/navbar/top/top.component';
import { UserService } from './user/user.service';
import { PainelComponent } from './painel/painel.component';
import { PainelUserListComponent } from './painel/pages/user/list/list.component';
import { PainelUserEditComponent } from './painel/pages/user/edit/edit.component';
import { PainelUserAddComponent } from './painel/pages/user/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientHomeComponent,
    PainelNavbarLeftComponent,
    PainelHomeComponent,
    UserLoginComponent,
    ClientNavbarTopComponent,
    UserRecoverPasswordComponent,
    PainelNavbarTopComponent,
    PainelComponent,
    PainelUserListComponent,
    PainelUserEditComponent,
    PainelUserAddComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
