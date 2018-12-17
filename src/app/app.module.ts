import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AuthGuard} from './auth/auth.guard';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { AdminComponent } from './component/admin/admin.component';
import { NavComponent } from './component/nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangTextDirective } from './directive/chang-text.directive';
import { UsersComponent } from './component/users/users.component';
import { GetUserService } from './service/get-user.service';
import { HttpClientModule } from '@angular/common/http';
import { UserdetailsComponent } from './component/userdetails/userdetails.component';
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    NavComponent,
    ChangTextDirective,
    UsersComponent,
    UserdetailsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [AuthGuard,GetUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
