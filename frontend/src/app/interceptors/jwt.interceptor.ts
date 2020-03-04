import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StoreService } from '../services/store.service';
import { API_CONFIG } from '../config/api-config';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private store: StoreService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let localUser = this.store.getLocalUser();
    let n = API_CONFIG.baseUrl.length;
    let requestToApi = request.url.substring(0, n) == API_CONFIG.baseUrl;

    if (localUser && requestToApi) {
      const authRequest = request.clone(
        { headers: request.headers.set('Authorization', "Bearer " + localUser['access']) });
      return next.handle(authRequest);
    }

    return next.handle(request);
  }
}

export const JwtInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: JwtInterceptor,
  multi: true
}
