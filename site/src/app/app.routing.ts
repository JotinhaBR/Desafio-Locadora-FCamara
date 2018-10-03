import { ClientHomeComponent } from './client/pages/home/home.component';
import { PainelHomeComponent } from './painel/pages/home/home.component';
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

const app_routes:Routes=[
    {path: '', component: ClientHomeComponent},
    {path: 'painel', component: PainelHomeComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(app_routes);
