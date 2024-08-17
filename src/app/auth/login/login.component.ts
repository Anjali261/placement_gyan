import { Component, OnInit } from '@angular/core';
import { Injectable, isDevMode } from '@angular/core';
import { OurAuthService } from '../../auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'
import { SocialUser, AuthService, GoogleLoginProvider, FacebookLoginProvider, LinkedinLoginProvider } from 'ng-social-login-module';
import { from } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

import { ApiDataService } from '../../Api-Data/api-data.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isDevMode: any;
  loginUserData: any = {};
  url = "";
  constructor(
    private _auth: OurAuthService,
    private toster: ToastrService,
    private _router: Router,
    private apidataService: ApiDataService,
    private authService: AuthService
    ) {
    this.isDevMode = false;
    if (isDevMode()) {
      this.isDevMode = true;
      // this.url="http://localhost:3000";
    }
  }

  ngOnInit(): void {

    if(this._auth.loggedIn())
    {
      console.log(this._auth.loggedIn());
      this.toster.success("Login Success",'',{timeOut:2000});
      this._router.navigate(['/']);
    }
  }

  loginUser() {

    console.log("done");
    // this._auth.loginUser(this.loginUserData).subscribe(
    //     res => {
    //       localStorage.clear();
    //       console.log(res.error);
    //       if(res.error){
    //         this.toster.error("Invalid credentials",'',{timeOut:2000});
    //         console.log("in here.....")
    //       }
    //       else{
    //         localStorage.clear();
    //         localStorage.setItem('token', res)
    //         window.location.reload();

    //       }
    //     },
    //     err => console.log(err)
    //   )
  }

  googleSignIn() : void {
    console.log('clicked');
    from(this.authService.signIn(GoogleLoginProvider.PROVIDER_ID))
    .pipe(
      takeWhile(() => {
        console.log ('inside');
        return true;
      })
    ).subscribe((user: SocialUser) => {
     console.log (user.photoUrl);
      const userData=user;
      this._auth.loginOauthUser(userData).subscribe( res=>{
          console.log(res);
          localStorage.clear();
          localStorage.setItem('token', res);
          localStorage.setItem('profilePic',user.photoUrl);
          console.log("login success");
          window.location.reload();

        },
        err=>{
          console.log("error");
        }
      )
    });
  }


}
