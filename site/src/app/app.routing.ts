import { ProdutosComponent } from './client/pages/produtos/produtos.component';
import { ClientHomeComponent } from './client/pages/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, Component } from '@angular/core';
import { UserLoginComponent } from './user/login/login.component';
import { PainelComponent } from './painel/painel.component';
import { PainelHomeComponent } from './painel/pages/home/home.component';

const appRoutes: Routes = [
    { path: '', component: ClientHomeComponent },
    { path: 'painel', component: PainelComponent,
        children: [
            { path: '', component: PainelHomeComponent }
        ]
    },
    {path: 'filmes', component: ProdutosComponent},
    { path: 'user/login', component: UserLoginComponent },
    { path: 'user/register', component: UserLoginComponent },
    { path: 'user/:id', component: UserLoginComponent }
    
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes); 
