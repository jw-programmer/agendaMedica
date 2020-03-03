import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { LoggedUserDTO } from 'src/app/models/logged-user.dto';
import { StoreService } from 'src/app/services/store.service';
import { JwtService } from 'src/app/services/jwt.service';
import { Router } from '@angular/router';
import { ConsultaDTO } from 'src/app/models/consulta.dto';
import { ConsultaService } from 'src/app/services/consulta.service';
import { DialogService } from 'primeng/dynamicdialog';
import { NewConsultaDialogComponent } from './new-consulta-dialog/new-consulta-dialog.component';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.sass'],
  providers: [DialogService]
})
export class ConsultasComponent implements OnInit {

  user: LoggedUserDTO
  consultas: ConsultaDTO[] = []

  constructor(private userService: UserService,
    private consultaService: ConsultaService,
    private store: StoreService,
    private jwt: JwtService,
    private dialogService: DialogService,
    private router: Router) { }

  ngOnInit(): void {
    this.setLoogedUser()
    this.setConsultas()
  }

  openNewConsulta() {
    let dialogRef = this.dialogService.open(NewConsultaDialogComponent, {
      header: "Selecione as opções",
      width: '70%'
    })
  }

  setConsultas() {
    this.consultaService.getConsultas().subscribe(response => {
      this.consultas = response
    },
      error => {
        alert("Problema ao recuperar as consultas")
      })
  }

  setLoogedUser() {
    let localUser = this.store.getLocalUser();
    this.userService.getUserById(localUser['claims']['user_id']).subscribe(response => {
      this.user = response as LoggedUserDTO
    },
      error => {
        alert("Erro ao recuperar Usuário")
      })
  }

  logout() {
    this.jwt.logout()
    this.router.navigate(['login'])
  }

}
