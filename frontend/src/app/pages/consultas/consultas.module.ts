import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';

import { ConsultasRoutingModule } from './consultas-routing.module';
import { ConsultasComponent } from './consultas.component';
import { NewConsultaDialogComponent } from './new-consulta-dialog/new-consulta-dialog.component';


@NgModule({
  declarations: [ConsultasComponent, NewConsultaDialogComponent],
  imports: [
    CommonModule,
    ConsultasRoutingModule,
    FormsModule,
    ButtonModule,
    ToolbarModule,
    TableModule,
    DropdownModule,
    DynamicDialogModule,
    ConfirmDialogModule,
    ToastModule
  ],
  entryComponents: [
    NewConsultaDialogComponent
  ]
})
export class ConsultasModule { }
