import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { FlexLayoutModule } from '@angular/flex-layout';


import { LoginComponent } from './login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
  ]
})
export class LoginModule { }
