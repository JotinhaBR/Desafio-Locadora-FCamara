import { ProdutosComponent } from './client/pages/produtos/produtos.component';
import { ClientHomeComponent } from './client/pages/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, Component } from '@angular/core';
import { UserLoginComponent } from './user/login/login.component';
import { PainelComponent } from './painel/painel.component';
import { PainelHomeComponent } from './painel/pages/home/home.component';
import { PainelUserListComponent } from './painel/pages/user/list/list.component';
import { PainelUserAddComponent } from './painel/pages/user/add/add.component';
import { PainelUserEditComponent } from './painel/pages/user/edit/edit.component';
import { AppComponent } from './app.component';




const appRoutes: Routes = [
    { path: '', component: ClientHomeComponent },
    { path: 'filmes', component: ProdutosComponent },


    
    // Rotas do painel
    { path: 'user', component: AppComponent,
        children: [
            { path: 'login', component: UserLoginComponent },
            { path: 'register', component: UserLoginComponent },
        ]
    },


    // Rotas do painel
    { path: 'painel', component: PainelComponent,
        children: [
            { path: '', component: PainelHomeComponent },
            { path: 'users', component: PainelUserListComponent },
            { path: 'user/add', component: PainelUserAddComponent },
            { path: 'user/edit', component: PainelUserEditComponent },
        ]
    },




];




export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes); 
