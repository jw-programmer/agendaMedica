import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: '', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) }, 
{ path: 'consulta', loadChildren: () => import('./pages/consultas/consultas.module').then(m => m.ConsultasModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
