import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cadrastrar(): void{
    console.log("Quero me cadrastar")
  }

  logar() : void{
    console.log("Quero me logar")
  }

}
