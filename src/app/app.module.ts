import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { SocialLoginModule,AuthServiceConfig,GoogleLoginProvider,FacebookLoginProvider} from 'ng-social-login-module';
import { HttpClientModule, HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';
import { BodyComponent } from './body/body.component';
import { NavComponent } from './body/nav/nav.component';
import { CreateComponent } from './article/create/create.component';
import { QuillModule } from 'ngx-quill';
import { AllPostComponent } from './all-post/all-post.component';
import { ProfileComponent } from './profile/profile.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalModule } from './_modal';

const CONFIG = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('479946233198-qdpn3s314aaokbfjdhph1s954kkpp82p.apps.googleusercontent.com')
  }
],true);


export function providerConfig(){
  return CONFIG;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BodyComponent,
    NavComponent,
    CreateComponent,
    AllPostComponent,
    ProfileComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    QuillModule.forRoot(),
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    ModalModule
  ],
  providers: [
    {
    provide: AuthServiceConfig,
    useFactory: providerConfig
  },
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
