import { ClientHomeComponent } from './client/pages/home/home.component';
import { PainelHomeComponent } from './painel/pages/home/home.component';
import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders, Component } from '@angular/core';
import { UserLoginComponent } from './user/login/login.component';

const app_routes:Routes=[
    {path: '', component: ClientHomeComponent},
    {path: 'painel', component: PainelHomeComponent},
    {path: 'user/login', component: UserLoginComponent}
    {path: 'user/:id', component: UserLoginComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(app_routes); 
