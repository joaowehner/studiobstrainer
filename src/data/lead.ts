import { businessData } from "./business";
export const leadShifts = [
  "Manhã (05h às 11h)",
  "Almoço / Tarde (11h às 16h)",
  "Fim de Tarde / Noite (16h às 21h)",
];
export const leadGoals = [
  "Saúde & Condicionamento",
  "Constância & Criação de Hábito",
  "Ganho de Massa Muscular / Força",
  "Alívio de Dores & Postura",
  "Mudança de Composição Corporal",
];
export function buildLeadMessage({
  name,
  phone,
  preferredShift,
  goal,
}: {
  name: string;
  phone: string;
  preferredShift: string;
  goal: string;
}) {
  return `Olá! Meu nome é *${name.trim()}*.\nGostaria de agendar uma aula experimental no *${businessData.name}*.\n\n• *Telefone/WhatsApp:* ${phone.trim()}\n• *Melhor turno para treino:* ${preferredShift}\n• *Meu objetivo principal:* ${goal}\n\nAguardo o retorno para confirmarmos o melhor dia e horário!`;
}
