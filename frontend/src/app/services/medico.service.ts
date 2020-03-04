import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MedicoDTO } from '../models/medico.dto';
import { API_CONFIG } from '../config/api-config';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private http: HttpClient) { }

  getMedicosByEspecialidade(especialidade_id): Observable<MedicoDTO[]>{
    return this.http.get<MedicoDTO[]>(`${API_CONFIG.baseUrl}medicos/?especialidade=${especialidade_id}`)
  }
}
