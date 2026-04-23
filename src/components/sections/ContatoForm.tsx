"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

/**
 * Formulário de Contato (Session 5) — Figma Group 16 (15:2956)
 *
 * 1380×670, bg #F0EBED, rounded-25, pad 72/0/72/54
 * Two columns: text left (540px) + form right (592px)
 * Heading: "Vamos planejar o seu próximo sucesso?" — 48px, #3A0814
 * Description: 24px, #A78991
 * Inputs: bg #E2D8DA, rounded-20, h=42
 * Radio options: "Quero representar meu espaço" / "Encontrar um local para evento"
 * CTA: "Falar com um especialista" — Geist 16/500, bg #BA2C73, text #F8EAF1, rounded-30
 */

const WHATSAPP_NUMBER = "5548996267846";

export default function ContatoForm() {
    const [nome, setNome] = useState("");
    const [empresa, setEmpresa] = useState("");
    const [email, setEmail] = useState("");
    const [interesse, setInteresse] = useState<string>("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const nomeDisplay = nome.trim() || "Visitante";
        const empresaDisplay = empresa.trim() || "(não informada)";
        const emailDisplay = email.trim() || "(não informado)";

        let mensagem: string;
        if (interesse === "espaco") {
            mensagem =
                `Sou ${nomeDisplay} da empresa ${empresaDisplay}, meu e-mail é ${emailDisplay}.\n\n` +
                `Quero representar meu espaço, pode me dar mais detalhes?`;
        } else if (interesse === "evento") {
            mensagem =
                `Sou ${nomeDisplay} da empresa ${empresaDisplay}, meu e-mail é ${emailDisplay}.\n\n` +
                `Quero encontrar um local para meu evento, pode me ajudar?`;
        } else {
            mensagem =
                `Sou ${nomeDisplay} da empresa ${empresaDisplay}, meu e-mail é ${emailDisplay}.\n\n` +
                `Gostaria de saber mais sobre os serviços da Pires.`;
        }

        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
        window.open(url, "_blank", "noopener,noreferrer");
    }

    return (
        <section id="contato" className="flex justify-center px-6">
            <div
                className="w-full max-w-[1380px] rounded-[25px] bg-[#F0EBED]
                   flex flex-col
                   px-8 lg:px-[54px] pt-[48px] lg:pt-[72px] pb-[48px] lg:pb-[72px]"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
                    {/* Left: text */}
                    <FadeIn>
                        <div className="flex flex-col h-full gap-12">
                            <h2 className="text-[32px] lg:text-[48px] leading-[1.15] font-light tracking-tight text-[#3A0814]">
                                Vamos planejar o seu próximo sucesso?
                            </h2>
                            <p className="text-[16px] lg:text-[20px] leading-[1.15] font-light text-[#A78991]">
                                Seja para representar seu espaço ou encontrar o destino ideal,
                                nossa equipe está pronta para acelerar seus resultados.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Right: form */}
                    <FadeIn delay={150}>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-[36px] w-full">
                            <div className="flex flex-col gap-[20px]">
                                {/* Nome */}
                                <div className="flex flex-col gap-[8px]">
                                    <label className="text-[16px] lg:text-[20px] font-light text-[#A78991]">
                                        Nome
                                    </label>
                                    <input
                                        type="text"
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)}
                                        placeholder="Seu nome"
                                        className="w-full h-[42px] bg-[#E2D8DA] rounded-[20px] px-4
                               text-[16px] font-light text-[#3A0814] placeholder:text-[#A78991]/50 outline-none
                               focus:ring-2 focus:ring-[#A01259]/30 transition-all"
                                    />
                                </div>

                                {/* Empresa */}
                                <div className="flex flex-col gap-[8px]">
                                    <label className="text-[16px] lg:text-[20px] font-light text-[#A78991]">
                                        Empresa
                                    </label>
                                    <input
                                        type="text"
                                        value={empresa}
                                        onChange={(e) => setEmpresa(e.target.value)}
                                        placeholder="Nome da sua empresa"
                                        className="w-full h-[42px] bg-[#E2D8DA] rounded-[20px] px-4
                               text-[16px] font-light text-[#3A0814] placeholder:text-[#A78991]/50 outline-none
                               focus:ring-2 focus:ring-[#A01259]/30 transition-all"
                                    />
                                </div>

                                {/* E-mail */}
                                <div className="flex flex-col gap-[8px]">
                                    <label className="text-[16px] lg:text-[20px] font-light text-[#A78991]">
                                        E-mail
                                    </label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="seu@email.com"
                                        className="w-full h-[42px] bg-[#E2D8DA] rounded-[20px] px-4
                               text-[16px] font-light text-[#3A0814] placeholder:text-[#A78991]/50 outline-none
                               focus:ring-2 focus:ring-[#A01259]/30 transition-all"
                                    />
                                </div>

                                {/* Radio: Quero representar meu espaço */}
                                <label className="flex items-center gap-[10px] cursor-pointer group">
                                    <div
                                        className={`w-[42px] h-[42px] shrink-0 rounded-[20px] border-2 flex items-center justify-center transition-all
                      ${interesse === "espaco" ? "bg-[#A01259] border-[#A01259]" : "bg-[#E2D8DA] border-[#E2D8DA] group-hover:border-[#A01259]/40"}`}
                                        onClick={() => setInteresse("espaco")}
                                    >
                                        {interesse === "espaco" && (
                                            <div className="w-3 h-3 rounded-full bg-white" />
                                        )}
                                    </div>
                                    <span className="text-[16px] lg:text-[20px] font-light text-[#A78991]">
                                        Quero representar meu espaço
                                    </span>
                                </label>

                                {/* Radio: Encontrar um local para evento */}
                                <label className="flex items-center gap-[10px] cursor-pointer group">
                                    <div
                                        className={`w-[42px] h-[42px] shrink-0 rounded-[20px] border-2 flex items-center justify-center transition-all
                      ${interesse === "evento" ? "bg-[#A01259] border-[#A01259]" : "bg-[#E2D8DA] border-[#E2D8DA] group-hover:border-[#A01259]/40"}`}
                                        onClick={() => setInteresse("evento")}
                                    >
                                        {interesse === "evento" && (
                                            <div className="w-3 h-3 rounded-full bg-white" />
                                        )}
                                    </div>
                                    <span className="text-[16px] lg:text-[20px] font-light text-[#A78991]">
                                        Encontrar um local para evento
                                    </span>
                                </label>
                            </div>

                            {/* CTA */}
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center gap-2
                           bg-[#BA2C73] hover:bg-[#a02565] text-[#F8EAF1]
                           rounded-[30px] px-[28px] py-[12px]
                           text-[16px] font-medium tracking-wide transition-all duration-300
                           hover:shadow-lg w-fit"
                                style={{ fontFamily: "Geist, sans-serif" }}
                            >
                                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Falar com um especialista
                            </button>
                        </form>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
