import { Component, OnInit } from '@angular/core';
import { MedicoDTO } from 'src/app/models/medico.dto';
import { EspecialidadeDTO } from 'src/app/models/especialidade.dto';
import { AgendaDTO } from 'src/app/models/agenda.dto';
import { EspecialidadeService } from 'src/app/services/especialidade.service';
import { MedicoService } from 'src/app/services/medico.service';
import { AgendaService } from 'src/app/services/agenda.service';
import { ConsultaService } from 'src/app/services/consulta.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ConfirmationService } from 'primeng/api';


@Component({
  selector: 'app-new-consulta-dialog',
  templateUrl: './new-consulta-dialog.component.html',
  styleUrls: ['./new-consulta-dialog.component.sass']
})
export class NewConsultaDialogComponent implements OnInit {

  // Popularam as opções dos Dropdowns
  especialidades: EspecialidadeDTO[] = []
  medicos: MedicoDTO[] = []
  agendas: AgendaDTO[] = []
  // Seram as opções escolhidas 
  especidade: EspecialidadeDTO;
  medico: MedicoDTO;
  agenda: AgendaDTO

  constructor(private ref: DynamicDialogRef,
    private confirm: ConfirmationService
    private especilidadeService: EspecialidadeService,
    private medicoService: MedicoService,
    private agendaService: AgendaService,
    private consultaService: ConsultaService) { }

  ngOnInit(): void {
    this.setEspecilidades()
  }

  setEspecilidades() {
    this.especilidadeService.getEspecialidades().subscribe(response => {
      this.especialidades = response
    },
      error => {
        alert(error)
      })
  }

  setMedicos() {
    this.medicoService.getMedicosByEspecialidade(this.especidade.id).subscribe(response => {
      this.medicos = response
    },
      error => {
        alert(error)
      })
  }

  setAgendas() {
    this.agendaService.getAgendasByMedico(this.medico.id).subscribe(response => {
      this.agendas = response
    },
      error => {
        alert(error)
      })
  }

  addConsulta() {
    let nova_consulta = { agenda: this.agenda.id }
    this.confirm.confirm({
      message: `Você deseja confimar a consulta com ${this.medico.nome} para ${this.agenda.horario}?`,
      accept: () => {
        this.consultaService.addConsulta(nova_consulta).subscribe(response => {
          this.ref.close(response)
        })
      }
    })
    // this.consultaService.addConsulta(nova_consulta).subscribe(response => {
    //   this.ref.close(response)
    // })
  }

  closeConsulta() {
    this.ref.close()
  }
}
