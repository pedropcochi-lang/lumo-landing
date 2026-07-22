"use client";
import { useState } from "react";

const C = {
  bg: "#0e1a14",
  card: "#162318",
  cardAlt: "#1a2d1f",
  greenDark: "#1e3a2f",
  greenMid: "#2d5a3d",
  greenAccent: "#3d7a54",
  cream: "#f5f0e8",
  gold: "#c9a96e",
  muted: "#5a7a64",
  secondary: "#a8b8a0",
  border: "rgba(61,122,84,0.2)",
  goldBorder: "rgba(201,169,110,0.3)",
};

const KIWIFY = "https://pay.kiwify.com.br/XdNIOxH";

const playfair: React.CSSProperties = { fontFamily: "'Playfair Display', serif" };

const TICKER_ITEMS = [
  "HÁBITOS COM STREAK", "METAS COM PLANO", "AGENTES DE IA", "FINANÇAS RASTREADAS",
  "ROTINA INTELIGENTE", "XP E GAMIFICAÇÃO", "COACH ROTA", "COACH FLUXO", "COACH ALVO",
  "ANÁLISE DE GASTOS", "PLANEJAMENTO DIÁRIO", "CONTROLE FINANCEIRO", "METAS COM PRAZO",
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  }

  return (
    <main style={{ backgroundColor: C.bg, color: C.cream, fontFamily: "'Inter', sans-serif" }}>

      {/* ── TICKER CSS ── */}
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          display: flex;
          width: max-content;
          animation: ticker 30s linear infinite;
        }
        .ticker-track:hover { animation-play-state: paused; }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "20px 40px", borderBottom: `1px solid ${C.border}`,
        position: "sticky", top: 0, zIndex: 50,
        backgroundColor: "rgba(14,26,20,0.95)", backdropFilter: "blur(12px)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 8,
            border: `1px solid ${C.gold}`,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ fontSize: 14, color: C.gold }}>◈</span>
          </div>
          <span style={{ fontSize: 18, fontWeight: 700, letterSpacing: 2, color: C.cream }}>lumo</span>
        </div>
        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          <a href="#agentes" style={{ color: C.secondary, fontSize: 14, textDecoration: "none" }}>Agentes</a>
          <a href="#preco" style={{ color: C.secondary, fontSize: 14, textDecoration: "none" }}>Preço</a>
        </div>
        <a href={KIWIFY} target="_blank" rel="noopener noreferrer" style={{
          backgroundColor: C.cream, color: C.bg, padding: "10px 24px",
          borderRadius: 999, fontSize: 14, fontWeight: 700, textDecoration: "none",
        }}>
          Começar agora
        </a>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        minHeight: "92vh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", textAlign: "center",
        padding: "80px 24px", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)",
          width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(61,122,84,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          backgroundColor: C.card, border: `1px solid ${C.goldBorder}`,
          borderRadius: 999, padding: "6px 16px", marginBottom: 32,
        }}>
          <span style={{ color: C.gold, fontSize: 12 }}>✦</span>
          <span style={{ fontSize: 12, color: C.gold, fontWeight: 600, letterSpacing: 1 }}>APP DE DESENVOLVIMENTO PESSOAL COM IA</span>
        </div>

        <h1 style={{
          ...playfair, fontSize: "clamp(36px, 6vw, 72px)",
          fontWeight: 700, lineHeight: 1.15, marginBottom: 24, maxWidth: 800,
        }}>
          Ilumine o caminho entre{" "}
          <em style={{ color: C.gold, fontStyle: "italic" }}>quem você é</em>
          {" "}e quem quer se tornar.
        </h1>

        <p style={{
          fontSize: "clamp(16px, 2vw, 20px)", color: C.secondary,
          lineHeight: 1.7, marginBottom: 48, maxWidth: 560,
        }}>
          Hábitos, metas e finanças em um só lugar — com agentes de IA que analisam seu progresso e te ajudam a evoluir todo dia.
        </p>

        <a href={KIWIFY} target="_blank" rel="noopener noreferrer" style={{
          backgroundColor: C.gold, color: C.bg, padding: "18px 48px",
          borderRadius: 999, fontSize: 18, fontWeight: 700, textDecoration: "none",
          display: "inline-block", marginBottom: 16,
        }}>
          Começar agora →
        </a>
        <p style={{ fontSize: 13, color: C.muted }}>Acesso imediato · Cancele quando quiser</p>
      </section>

      {/* ── TICKER ── */}
      <div style={{
        backgroundColor: C.greenDark, borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`, padding: "14px 0",
        overflow: "hidden",
      }}>
        <div className="ticker-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} style={{
              color: C.secondary, fontSize: 12, fontWeight: 600,
              letterSpacing: 1.5, whiteSpace: "nowrap",
              padding: "0 32px",
            }}>
              ✦ {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── PROBLEMA ── */}
      <section style={{ padding: "100px 24px", textAlign: "center", borderTop: `1px solid ${C.border}` }}>
        <p style={{ color: C.gold, fontSize: 12, fontWeight: 600, letterSpacing: 2, marginBottom: 24 }}>✦ O PROBLEMA</p>
        <h2 style={{ ...playfair, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.2, maxWidth: 680, margin: "0 auto 24px" }}>
          Você sabe o que precisa fazer.{" "}
          <em style={{ color: C.gold, fontStyle: "italic" }}>Mas não faz.</em>
        </h2>
        <p style={{ color: C.secondary, fontSize: 18, lineHeight: 1.7, maxWidth: 560, margin: "0 auto 60px" }}>
          Não é falta de informação. É falta de sistema. De consistência. De alguém que te acompanhe todo dia e te lembre do que importa.
        </p>
        <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap", maxWidth: 900, margin: "0 auto" }}>
          {[
            { icon: "📋", text: "Apps cheios de funcionalidade que você não usa" },
            { icon: "😩", text: "Começa na segunda, abandona na quarta" },
            { icon: "💸", text: "Dinheiro sumindo sem saber pra onde vai" },
            { icon: "🎯", text: "Metas que ficam no papel e nunca saem do lugar" },
          ].map(item => (
            <div key={item.text} style={{
              backgroundColor: C.card, border: `1px solid ${C.border}`,
              borderRadius: 16, padding: "24px", width: 200, textAlign: "left",
            }}>
              <span style={{ fontSize: 28, display: "block", marginBottom: 12 }}>{item.icon}</span>
              <p style={{ color: C.secondary, fontSize: 14, lineHeight: 1.6 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SOLUÇÃO ── */}
      <section style={{ padding: "100px 24px", borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <p style={{ color: C.gold, fontSize: 12, fontWeight: 600, letterSpacing: 2, textAlign: "center", marginBottom: 16 }}>✦ A SOLUÇÃO</p>
          <h2 style={{ ...playfair, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, textAlign: "center", marginBottom: 16 }}>
            Um sistema completo para{" "}
            <em style={{ color: C.gold, fontStyle: "italic" }}>evoluir de verdade</em>
          </h2>
          <p style={{ color: C.secondary, fontSize: 18, textAlign: "center", marginBottom: 64, lineHeight: 1.7 }}>
            Tudo que você precisa para construir a melhor versão de si mesmo — em um só lugar.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {[
              { icon: "🔥", title: "Hábitos com streak", desc: "Check-in diário, sequências, XP e gamificação que te mantém motivado mesmo nos dias difíceis." },
              { icon: "🎯", title: "Metas com plano", desc: "Defina objetivos financeiros ou pessoais. O app calcula o caminho e acompanha cada passo." },
              { icon: "💵", title: "Finanças rastreadas", desc: "Registre entradas e saídas, veja para onde seu dinheiro vai e tome decisões melhores." },
            ].map(f => (
              <div key={f.title} style={{
                backgroundColor: C.card, borderRadius: 20,
                padding: 32, border: `1px solid ${C.border}`,
              }}>
                <span style={{ fontSize: 36, display: "block", marginBottom: 16 }}>{f.icon}</span>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: C.cream, marginBottom: 12 }}>{f.title}</h3>
                <p style={{ color: C.secondary, lineHeight: 1.7, fontSize: 15 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AGENTES ── */}
      <section id="agentes" style={{
        padding: "100px 24px", borderTop: `1px solid ${C.border}`,
        background: `linear-gradient(180deg, ${C.bg} 0%, ${C.cardAlt} 100%)`,
      }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <p style={{ color: C.gold, fontSize: 12, fontWeight: 600, letterSpacing: 2, textAlign: "center", marginBottom: 16 }}>✦ AGENTES DE IA</p>
          <h2 style={{ ...playfair, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, textAlign: "center", marginBottom: 16 }}>
            Três coaches de IA que{" "}
            <em style={{ color: C.gold, fontStyle: "italic" }}>te conhecem</em>
          </h2>
          <p style={{ color: C.secondary, fontSize: 18, textAlign: "center", marginBottom: 64, lineHeight: 1.7 }}>
            Não são chatbots genéricos. Eles leem seus dados e respondem com base na sua realidade.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {[
              { nome: "ROTA", cor: C.greenAccent, tagline: "Seu dia, antes de você acordar.", desc: "Analisa seus hábitos, identifica padrões de quebra e monta sua rotina ideal.", perguntas: ["Monte minha rotina de amanhã", "Quais hábitos devo priorizar?"] },
              { nome: "FLUXO", cor: C.gold, tagline: "Cada centavo, rastreado.", desc: "Analisa seus gastos, identifica onde você perde dinheiro e sugere onde cortar.", perguntas: ["Quanto gastei este mês?", "Analise gastos por categoria"] },
              { nome: "ALVO", cor: "#4a9fd4", tagline: "Sonhos viram números.", desc: "Acompanha suas metas, calcula prazos e cria planos de ação semana a semana.", perguntas: ["Qual meu progresso nas metas?", "Monte um plano para minha meta"] },
            ].map(a => (
              <div key={a.nome} style={{
                backgroundColor: C.card, borderRadius: 20,
                padding: 32, border: `1px solid ${a.cor}44`,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    backgroundColor: a.cor + "22", border: `1px solid ${a.cor}44`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <span style={{ color: a.cor, fontWeight: 700, fontSize: 14 }}>✦</span>
                  </div>
                  <div>
                    <p style={{ color: a.cor, fontWeight: 700, fontSize: 16, letterSpacing: 1 }}>{a.nome}</p>
                    <p style={{ color: C.muted, fontSize: 12, fontStyle: "italic" }}>{a.tagline}</p>
                  </div>
                </div>
                <p style={{ color: C.secondary, fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>{a.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {a.perguntas.map(p => (
                    <div key={p} style={{
                      backgroundColor: C.cardAlt, borderRadius: 8, padding: "10px 14px",
                      fontSize: 13, color: C.secondary, border: `1px solid ${C.border}`,
                    }}>"{p}"</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ── */}
      <section style={{ padding: "100px 24px", borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ color: C.gold, fontSize: 12, fontWeight: 600, letterSpacing: 2, textAlign: "center", marginBottom: 16 }}>✦ RESULTADOS</p>
          <h2 style={{ ...playfair, fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, textAlign: "center", marginBottom: 64 }}>
            Quem já está na jornada
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {[
              { nome: "Ana R.", cargo: "Designer, 28 anos", texto: "Finalmente um app que não abandono depois de uma semana. O ROTA me lembra dos hábitos de um jeito que faz sentido." },
              { nome: "Lucas M.", cargo: "Empreendedor, 32 anos", texto: "O FLUXO identificou que eu gastava R$800/mês em assinaturas que nem usava. Paguei o app em 1 dia." },
              { nome: "Carla S.", cargo: "Profissional de RH, 26 anos", texto: "Atingi minha meta de juntar R$10k em 8 meses. O ALVO me manteve focada quando eu queria desistir." },
            ].map(d => (
              <div key={d.nome} style={{
                backgroundColor: C.card, borderRadius: 20, padding: 28,
                border: `1px solid ${C.border}`,
              }}>
                <p style={{ color: C.gold, fontSize: 24, marginBottom: 16 }}>"</p>
                <p style={{ color: C.secondary, fontSize: 15, lineHeight: 1.7, marginBottom: 20 }}>{d.texto}</p>
                <div>
                  <p style={{ color: C.cream, fontWeight: 600, fontSize: 14 }}>{d.nome}</p>
                  <p style={{ color: C.muted, fontSize: 12 }}>{d.cargo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PREÇO ── */}
      <section id="preco" style={{
        padding: "100px 24px", borderTop: `1px solid ${C.border}`,
        background: `linear-gradient(180deg, ${C.bg} 0%, ${C.cardAlt} 100%)`,
      }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: C.gold, fontSize: 12, fontWeight: 600, letterSpacing: 2, marginBottom: 16 }}>✦ INVESTIMENTO</p>
          <h2 style={{ ...playfair, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, marginBottom: 16 }}>
            Menos que um café por dia
          </h2>
          <p style={{ color: C.secondary, fontSize: 18, lineHeight: 1.7, marginBottom: 48 }}>
            Um investimento que se paga na primeira semana de clareza financeira.
          </p>

          <div style={{ maxWidth: 360, margin: "0 auto 40px" }}>
            <div style={{
              backgroundColor: C.greenDark, borderRadius: 20, padding: 32,
              border: `1px solid ${C.greenAccent}`, textAlign: "center", position: "relative",
            }}>
              <div style={{
                position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
                backgroundColor: C.gold, color: C.bg, fontSize: 11, fontWeight: 700,
                padding: "4px 14px", borderRadius: 999, letterSpacing: 1, whiteSpace: "nowrap",
              }}>MELHOR OPÇÃO</div>
              <p style={{ color: C.greenAccent, fontSize: 13, fontWeight: 600, letterSpacing: 1, marginBottom: 16 }}>ANUAL</p>
              <p style={{ fontSize: 40, fontWeight: 700, color: C.cream, marginBottom: 4 }}>R$ 297<span style={{ fontSize: 20 }}>,00</span></p>
              <p style={{ color: C.muted, fontSize: 13, marginBottom: 24 }}>por ano · economia de R$ 507</p>
              <a href={KIWIFY} target="_blank" rel="noopener noreferrer" style={{
                display: "block", backgroundColor: C.gold, color: C.bg,
                padding: "14px", borderRadius: 999, fontSize: 14, fontWeight: 700,
                textDecoration: "none",
              }}>Começar agora</a>
            </div>
          </div>

          <p style={{ color: C.secondary, fontSize: 14 }}>
            ✓ Acesso completo · ✓ 3 agentes de IA · ✓ Sem limite de hábitos e metas
          </p>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section style={{ padding: "100px 24px", borderTop: `1px solid ${C.border}`, textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <span style={{ fontSize: 48, color: C.gold, display: "block", marginBottom: 24 }}>◈</span>
          <h2 style={{ ...playfair, fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, marginBottom: 20 }}>
            Sua melhor versão começa{" "}
            <em style={{ color: C.gold, fontStyle: "italic" }}>agora</em>
          </h2>
          <p style={{ color: C.secondary, fontSize: 18, lineHeight: 1.7, marginBottom: 48 }}>
            Acesso imediato. Comece a construir sua rotina hoje.
          </p>
          <a href={KIWIFY} target="_blank" rel="noopener noreferrer" style={{
            display: "inline-block", backgroundColor: C.gold, color: C.bg,
            padding: "18px 48px", borderRadius: 999, fontSize: 16, fontWeight: 700,
            textDecoration: "none", marginBottom: 16,
          }}>
            Começar agora →
          </a>
          <p style={{ color: C.muted, fontSize: 13 }}>Acesso imediato · Cancele quando quiser</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        borderTop: `1px solid ${C.border}`, padding: "32px 40px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: 16,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ color: C.gold }}>◈</span>
          <span style={{ color: C.muted, fontSize: 14 }}>lumo · {new Date().getFullYear()}</span>
        </div>
        <p style={{ color: C.muted, fontSize: 13 }}>Feito para quem quer evoluir de verdade.</p>
      </footer>

    </main>
  );
}
