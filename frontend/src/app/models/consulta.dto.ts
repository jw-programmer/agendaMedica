import { MedicoDTO } from './medico.dto';

export interface ConsultaDTO{
    id: Number,
    dia: String,
    horario: String,
    data_agendamento: Date,
    medico: MedicoDTO
}