import { Component, OnInit } from '@angular/core';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { JwtService } from '../../services/jwt.service';
import { Router } from '@angular/router';

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
    private router: Router) { }

  ngOnInit(): void {
  }

  cadrastrar(): void {
    console.log("Quero me cadrastar")
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
