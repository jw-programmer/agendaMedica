import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CredenciaisDTO } from '../models/credenciais.dto';
import { API_CONFIG } from '../config/api_config';
import { UserDTO } from '../models/user.dto';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient,
    private store: StoreService) { }

  autenticar(cred: CredenciaisDTO) {
    return this.http.post(`${API_CONFIG.baseUrl}login/`, cred, {
      observe: "response",
      responseType: "json"
    })
  }

  loginSucesso(tokens: any) {
    let user: UserDTO = {
      access: tokens['access'],
      refresh: tokens['refresh'],
      username: this.jwtHelper.decodeToken(tokens['access'])
    }
    this.store.setLocalUser(user)
  }

  logout() {
    this.store.setLocalUser(null)
  }
}
