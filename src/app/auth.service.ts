import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';

// AIzaSyAt5EKL3uug5WSxx8AoVoz4z5mWy8Pq1hg

@Injectable({
  providedIn: 'root'
})

export class OurAuthService {

  private _registerUrl = "/api/auth/register";
  private _loginUrl = "/api/auth/login";
  private _oAuthgoogle="/api/auth/google";
  bat:string;
  uid:string;
  hid:string;
  mid:string;
  isValid:boolean=false;
  url = '';

  constructor(private http: HttpClient,private _router:Router) {
    if (isDevMode()) {
      this.url = "http://localhost:3000";
    }
  }


  registerUser(user) {
    return this.http.post<any>(this.url+this._registerUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this.url+this._loginUrl, user)
  }

  loginOauthUser(user){
    console.log("here!!!");
    console.log("service ");
    console.log(this._oAuthgoogle);
    console.log(user);
    return this.http.post<any>(this.url+this._oAuthgoogle,user);
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

    // console.log(decoded);

    if (decoded.exp === undefined) return null;

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  loggedIn(){
  let token= localStorage.getItem("token");

  if(!token) return false;
  const date = this.getTokenExpirationDate(token);

  if(date === undefined) return false;
  if(date.valueOf() < new Date().valueOf()){
    console.log("session expired");
    this.logout();
  }

  let tok=localStorage.getItem('token');
    if(tok)
    return tok;
    return null;
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('profilePic');
    this._router.navigate(['/auth/login']);
    this.bat=null;
    this.uid=this.hid=this.mid=null;
    this.isValid=false;

  }

  getName(){
    if(this.loggedIn()){
    var decode=jwt_decode(localStorage.getItem('token'));
    return decode.name;
    }
  }

  getMail(){
    if(this.loggedIn()){
      var decode=jwt_decode(localStorage.getItem('token'));
      return decode.email;
    }
  }

  getRole(){
    if(this.loggedIn()){
       var decode=jwt_decode(localStorage.getItem('token'));
      return decode.role;
      }
    return false;
  }

  validateAdmin(){
    if(this.loggedIn()){
       var decode=jwt_decode(localStorage.getItem('token'));
       var role=decode.role;
       if(role=="Admin") return true;
    }
    return false;
  }

  validateStudent(){
    if(this.loggedIn()){
       var decode=jwt_decode(localStorage.getItem('token'));
       var role=decode.role;
       if(role==="Student") return true;
    }
    return false;
  }

  validateFaculty(){
    if(this.loggedIn()){
      var decode=jwt_decode(localStorage.getItem('token'));
      var role=decode.role;
      if(role==="Faculty") return true;
   }
   return false;
  }

  getId(){
      var decode=jwt_decode(localStorage.getItem('token'));
      var id=decode._id;
      return id;
  }

  getProfileUrl(){
    return localStorage.getItem('profilePic') || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg==";
  }

  setProfileData(bat:string,uid:string,hid:string,mid:string){
    this.bat=bat;
    this.uid=uid;
    this.hid=hid;
    this.mid=mid;
    if(this.bat && this.uid && this.hid && this.mid){
      this.isValid=true;
    }
  }

}
