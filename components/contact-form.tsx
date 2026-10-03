"use client";

import { useState } from "react";

const operacoes = ["Incorporadora", "Imobiliária", "Gestão comercial", "Outro"];

// Endpoint do Formspree (https://formspree.io) — criar o form e colar a URL aqui,
// algo como "https://formspree.io/f/xxxxxxx". Enquanto estiver vazio, o formulário
// apenas confirma visualmente (não envia), para não quebrar o site publicado.
const FORMSPREE_ENDPOINT = "";

const field =
  "w-full rounded-xl border border-paper/15 bg-paper/[0.04] px-4 py-3 text-paper placeholder:text-paper/35 outline-none transition-colors focus:border-accent";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Sem endpoint configurado ainda: confirma sem enviar (integração vem depois).
    if (!FORMSPREE_ENDPOINT) {
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error(`Formspree respondeu ${res.status}`);
      form.reset();
      setStatus("sent");
    } catch (err) {
      console.error("Falha ao enviar o formulário de contato:", err);
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-accent/40 bg-accent/[0.06] p-9">
        <span className="mono-label text-accent">[ RECEBIDO ]</span>
        <h3 className="display text-2xl font-semibold text-paper">
          Obrigado. A SOMMA vai analisar com atenção.
        </h3>
        <p className="text-base leading-relaxed text-paper/65">
          Retornamos em até um dia útil — com diagnóstico, não com discurso pronto.
        </p>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="mono-label text-paper/55">NOME</span>
          <input required name="nome" type="text" placeholder="Seu nome" className={field} />
        </label>
        <label className="flex flex-col gap-2">
          <span className="mono-label text-paper/55">EMPRESA</span>
          <input required name="empresa" type="text" placeholder="Incorporadora / imobiliária" className={field} />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="mono-label text-paper/55">CARGO</span>
          <input required name="cargo" type="text" placeholder="Seu cargo" className={field} />
        </label>
        <label className="flex flex-col gap-2">
          <span className="mono-label text-paper/55">WHATSAPP</span>
          <input required name="whatsapp" type="tel" placeholder="(00) 00000-0000" className={field} />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="mono-label text-paper/55">TIPO DE OPERAÇÃO</span>
        <select required name="operacao" defaultValue="" className={`${field} appearance-none`}>
          <option value="" disabled>
            Selecione
          </option>
          {operacoes.map((p) => (
            <option key={p} value={p} className="bg-navy text-paper">
              {p}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-2">
        <span className="mono-label text-paper/55">PRINCIPAL DESAFIO</span>
        <textarea
          required
          name="desafio"
          rows={4}
          placeholder="Onde a operação parece travar hoje?"
          className={`${field} resize-none`}
        />
      </label>

      <button
        type="submit"
        disabled={sending}
        className="group mt-2 inline-flex items-center justify-center gap-2.5 self-start rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white shadow-[0_8px_30px_-8px_rgba(1,152,255,0.6)] transition-all duration-300 hover:gap-3.5 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {sending ? "Enviando…" : "Diagnosticar minha operação"}
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
      </button>

      {status === "error" && (
        <p className="text-sm text-red-400">
          Não foi possível enviar agora. Tente novamente em instantes ou fale com a
          SOMMA pelo WhatsApp.
        </p>
      )}

      <p className="mono-label text-paper/35">
        RESPOSTA EM ATÉ 1 DIA ÚTIL · SEM SPAM · MÁX. 1 E-MAIL / SEMANA
      </p>
    </form>
  );
}
