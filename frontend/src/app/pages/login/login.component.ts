import { Component, OnInit } from '@angular/core';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { JwtService } from '../../services/jwt.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  cred: CredenciaisDTO = {
    username: "",
    password: ""
  }

  constructor(private jwtService: JwtService,
    private userService: UserService,
    private store: StoreService,
    private router: Router) { }

  ngOnInit(): void {
    let localUser = this.store.getLocalUser()
    if (localUser) {
      this.jwtService.refresh(localUser['refresh']).subscribe(response => {
        localUser.access = response.body['access']
        this.store.setLocalUser(localUser)
        this.router.navigate(['consulta'])
      },
        error => {
          if(error.status == 403){
            alert("OPERAÇÃO PROIBIDA")
          }
        })
    }
  }

  cadrastrar(): void {
    // let localUser = this.store.getLocalUser()
    // console.log(localUser['claims']['user_id'])
    this.userService.createUser(this.cred).subscribe(response => {
      this.logar()
    },
      error => {
        alert("Erro durante a criação do usuário")
      })
  }

  logar(): void {
    this.jwtService.autenticar(this.cred).subscribe(response => {
      this.jwtService.loginSucesso(response.body)
      this.router.navigate(['consulta'])
    },
      error => {
        alert("Erro ao se conectar")
      })
  }

}
