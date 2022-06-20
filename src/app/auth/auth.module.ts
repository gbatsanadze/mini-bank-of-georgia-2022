import { NgModule } from '@angular/core';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// import { AppRoutingModule } from "../app-routing.module";


@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent],
  imports: [SharedModule, FormsModule, ReactiveFormsModule,  AuthRoutingModule],
})
export class AuthModule {}
