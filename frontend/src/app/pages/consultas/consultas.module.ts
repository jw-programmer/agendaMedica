import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import {DynamicDialogModule} from 'primeng/dynamicdialog';

import { ConsultasRoutingModule } from './consultas-routing.module';
import { ConsultasComponent } from './consultas.component';
import { NewConsultaDialogComponent } from './new-consulta-dialog/new-consulta-dialog.component';


@NgModule({
  declarations: [ConsultasComponent, NewConsultaDialogComponent],
  imports: [
    CommonModule,
    ConsultasRoutingModule,
    ButtonModule,
    ToolbarModule,
    TableModule,
    DynamicDialogModule
  ],
  entryComponents:[
    NewConsultaDialogComponent
  ]
})
export class ConsultasModule { }
