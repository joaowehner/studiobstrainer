import { containDialogFocus } from "../utils/dialog";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { X } from "lucide-react";
import { businessData, getWhatsAppUrl } from "../data/business";
import { buildLeadMessage, leadGoals, leadShifts } from "../data/lead";

export function LeadModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredShift, setPreferredShift] = useState(leadShifts[0]);
  const [goal, setGoal] = useState(leadGoals[0]);
  const [error, setError] = useState("");
  const [errorField, setErrorField] = useState<"name" | "phone" | "">("");
  const [readyUrl, setReadyUrl] = useState("");
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen || !dialog) {
      if (dialog?.open) dialog.close();
      return;
    }
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    if (!dialog.open) dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus({ preventScroll: true });
    };
  }, [isOpen]);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim()) {
      setError("Informe seu nome para continuar.");
      setErrorField("name");
      document.getElementById("lead-name")?.focus();
      return;
    }
    if (!/^(?:55)?\d{10,11}$/.test(phone.replace(/\D/g, ""))) {
      setError("Confira o WhatsApp e inclua o DDD.");
      setErrorField("phone");
      document.getElementById("lead-phone")?.focus();
      return;
    }
    setError("");
    setErrorField("");
    const url = getWhatsAppUrl(
      buildLeadMessage({ name, phone, preferredShift, goal }),
      "lead_modal",
    );
    setReadyUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }
  return (
    <dialog
      onKeyDown={containDialogFocus}
      ref={dialogRef}
      className="lead-dialog"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === dialogRef.current) {
          const r = dialogRef.current.getBoundingClientRect();
          if (
            e.clientX < r.left ||
            e.clientX > r.right ||
            e.clientY < r.top ||
            e.clientY > r.bottom
          )
            onClose();
        }
      }}
    >
      <button
        className="icon-button modal-close"
        onClick={onClose}
        aria-label="Fechar janela de agendamento"
      >
        <X aria-hidden="true" />
      </button>
      <p className="section-label">Aula experimental</p>
      <h2 id="modal-title">
        Vamos combinar
        <br />
        seu primeiro treino?
      </h2>
      <p id="modal-description">
        Conte um pouco sobre você. O WhatsApp abrirá com a mensagem pronta para
        você enviar à equipe.
      </p>
      <form onSubmit={submit}>
        <div className="form-field">
          <label htmlFor="lead-name">Seu nome (obrigatório)</label>
          <input
            id="lead-name"
            name="name"
            autoComplete="name"
            type="text"
            required
            maxLength={100}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setReadyUrl("");
            }}
            placeholder="Como podemos chamar você?"
            aria-invalid={errorField === "name" || undefined}
            aria-describedby={errorField === "name" ? "lead-error" : undefined}
          />
        </div>
        <div className="form-field">
          <label htmlFor="lead-phone">Seu WhatsApp com DDD (obrigatório)</label>
          <input
            id="lead-phone"
            name="phone"
            autoComplete="tel"
            type="tel"
            inputMode="tel"
            required
            maxLength={22}
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              setReadyUrl("");
            }}
            placeholder="(67) 99999-9999"
            aria-invalid={errorField === "phone" || undefined}
            aria-describedby={errorField === "phone" ? "lead-error" : undefined}
          />
        </div>
        <div className="form-field">
          <label htmlFor="lead-shift">Melhor turno para treinar</label>
          <select
            id="lead-shift"
            name="preferredShift"
            value={preferredShift}
            onChange={(e) => {
              setPreferredShift(e.target.value);
              setReadyUrl("");
            }}
          >
            {leadShifts.map((shift) => (
              <option key={shift}>{shift}</option>
            ))}
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="lead-goal">Objetivo principal</label>
          <select
            id="lead-goal"
            name="goal"
            value={goal}
            onChange={(e) => {
              setGoal(e.target.value);
              setReadyUrl("");
            }}
          >
            {leadGoals.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
        {error && (
          <p id="lead-error" className="form-error" role="alert">
            {error}
          </p>
        )}
        <button className="button" type="submit">
          Continuar no WhatsApp
        </button>
        {readyUrl && (
          <p className="form-status" role="status">
            Mensagem preparada. Se a nova aba não abriu,{" "}
            <a href={readyUrl} target="_blank" rel="noopener noreferrer">
              abrir WhatsApp
            </a>
            .
          </p>
        )}
        <p className="form-note">
          Seus dados são utilizados exclusivamente para o contato do Studio. O
          agendamento será confirmado pela equipe do {businessData.name}.
        </p>
      </form>
    </dialog>
  );
}
