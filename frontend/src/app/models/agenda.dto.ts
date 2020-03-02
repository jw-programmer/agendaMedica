import { MedicoDTO } from './medico.dto';

export interface AgendaDTO {
    id: number,
    horario: Date,
    medico: MedicoDTO
}