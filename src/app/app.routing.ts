import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewlistComponent } from './viewlist/viewlist.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegisterComponent},
    { path: 'meetings' , component:ViewlistComponent}
  ];  
     
  @NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash: true })],   
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}