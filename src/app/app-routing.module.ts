import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import {AdminComponent} from './component/admin/admin.component';
import {LoginComponent} from './component/login/login.component';
import {AuthGuard} from './auth/auth.guard';
import { UsersComponent } from './component/users/users.component';
import { UserdetailsComponent } from './component/userdetails/userdetails.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminComponent,canActivate:[AuthGuard],
    children :[
      {path:'', component:UsersComponent},
      {path:"details/:id",component:UserdetailsComponent}
    ]
  },
  {path:'login',component:LoginComponent},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
