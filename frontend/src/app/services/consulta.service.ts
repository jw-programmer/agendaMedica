import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConsultaDTO } from '../models/consulta.dto';
import { API_CONFIG } from '../config/api-config';
import { NewConsultaDTO } from '../models/new-consulta.dto';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private http: HttpClient) { }

  getConsultas(): Observable<ConsultaDTO[]> {
    return this.http.get<ConsultaDTO[]>(`${API_CONFIG.baseUrl}consultas/`)
  }

  addConsulta(agenda: NewConsultaDTO) {
    return this.http.post(`${API_CONFIG.baseUrl}consultas/`, agenda, {
      observe: "response",
      responseType: 'text'
    })
  }
}
