import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EspecialidadeDTO } from '../models/especialidade.dto';
import { API_CONFIG } from '../config/api-config';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadeService {

  constructor(private http: HttpClient) { }

  getEspecialidades(): Observable<EspecialidadeDTO[]>{
    return this.http.get<EspecialidadeDTO[]>(`${API_CONFIG.baseUrl}especialidades/`)
  }
}
