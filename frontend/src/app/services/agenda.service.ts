import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AgendaDTO } from '../models/agenda.dto';
import { API_CONFIG } from '../config/api-config';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor(private http: HttpClient) { }

  getAgendasByMedico(medico_id): Observable<AgendaDTO[]> {
    return this.http.get<AgendaDTO[]>(`${API_CONFIG.baseUrl}agendas/?medico=${medico_id}`)
  }
}
