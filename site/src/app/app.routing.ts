import { ClientHomeComponent } from './client/pages/home/home.component';
import { PainelHomeComponent } from './painel/pages/home/home.component';
import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders, Component } from '@angular/core';
import { UserLoginComponent } from './user/login/login.component';
import { ProdutosComponent } from './client/pages/produtos/produtos.component';

const app_routes:Routes=[
    {path: '', component: ClientHomeComponent},
    {path: 'painel', component: PainelHomeComponent},
    {path: 'user/login', component: UserLoginComponent},
    {path: 'user/register', component: UserLoginComponent},
    {path: 'user/produtos', component: ProdutosComponent},
    {path: 'user/:id', component: UserLoginComponent}
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(app_routes); 
