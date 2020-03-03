import { Component, OnInit } from '@angular/core';
import { MedicoDTO } from 'src/app/models/medico.dto';
import { EspecialidadeDTO } from 'src/app/models/especialidade.dto';
import { AgendaDTO } from 'src/app/models/agenda.dto';

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

  constructor() { }

  ngOnInit(): void {
  }

}
