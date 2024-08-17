import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import {OurAuthService} from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector: Injector) { }

  intercept(req,next){
    let AuthService=this.injector.get(OurAuthService);
    let tokenizedReq=req.clone({
      setHeaders:{
        Authorization: 'Bearer ${AuthService.getToken()}'
      }
    })
    return next.handle(tokenizedReq)
  }
}