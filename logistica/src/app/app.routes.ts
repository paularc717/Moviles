import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { GuiaComponent } from './pages/guia/guia.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { RegistroComponent } from './pages/registro/registro.component';

export const routes: Routes = [
    {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent

    },
    {
        path: '',
        redirectTo: 'guia',
        pathMatch: 'full'
    },
    {
        path: 'guia',
        component: GuiaComponent
    },
    {
        path: '',
        redirectTo: 'registro',
        pathMatch: 'full'
    },
    {
        path: 'registro',
        component: RegistroComponent
    },
    {
        path: '',
        redirectTo: 'contacto',
        pathMatch: 'full'
    },
    {
        path: 'contacto',
        component: ContactoComponent
    },
];
