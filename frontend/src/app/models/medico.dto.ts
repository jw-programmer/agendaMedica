import { EspecialidadeDTO } from './especialidade.dto';

export interface MedicoDTO {
    // TODO: Falata implementar as demais caracteristicas
    id: Number,
    nome: String,
    crm: String,
    email: String,
    telefone: String,
    especialidade: EspecialidadeDTO
}