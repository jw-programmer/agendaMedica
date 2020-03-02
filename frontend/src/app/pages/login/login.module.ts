import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import {InputTextModule} from 'primeng/inputtext';
import { LoginComponent } from './login.component';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule
  ]
})
export class LoginModule { }
