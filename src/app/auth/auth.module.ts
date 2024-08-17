import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
// import { SocialLoginModule } from 'ng-social-login-module';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
   AuthComponent,
   LoginComponent,
   SignupComponent

  ],
  imports: [
    RouterModule,
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    // SocialLoginModule,
    ToastrModule.forRoot()

  ]
})
export class AuthModule { }
