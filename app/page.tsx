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

// Checkout Kiwify — plano anual (já em produção)
const KIWIFY = "https://pay.kiwify.com.br/XdNIOxH";
// TODO: substituir pelo link de checkout Kiwify do plano MENSAL (R$67/mês) assim
// que for criado no painel da Kiwify. Até lá aponta pro mesmo checkout anual
// pra não quebrar o botão.
const KIWIFY_MENSAL = KIWIFY;

const playfair: React.CSSProperties = { fontFamily: "'Playfair Display', serif" };

const TICKER_ITEMS = [
  "HÁBITOS COM STREAK", "METAS COM PLANO", "AGENTES DE IA", "FINANÇAS RASTREADAS",
  "ROTINA INTELIGENTE", "XP E GAMIFICAÇÃO", "COACH ROTA", "COACH FLUXO", "COACH ALVO",
  "ANÁLISE DE GASTOS", "PLANEJAMENTO DIÁRIO", "CONTROLE FINANCEIRO", "METAS COM PRAZO",
];

const COMO_FUNCIONA = [
  { n: "01", icon: "📲", title: "Baixe o app", desc: "Crie sua conta e comece o trial de 7 dias — sem burocracia." },
  { n: "02", icon: "🔗", title: "Conecte sua rotina", desc: "Adicione seus hábitos, metas e gastos em minutos." },
  { n: "03", icon: "✦", title: "Receba acompanhamento diário", desc: "ROTA, FLUXO e ALVO te ajudam a evoluir todo dia, com base nos seus dados reais." },
];

const ANTES_DEPOIS = [
  { area: "Rotina", antes: "Inconsistente", depois: "Sob controle" },
  { area: "Finanças", antes: "Vazando", depois: "Rastreadas" },
  { area: "Metas", antes: "Só no papel", depois: "Com plano e prazo" },
];

const FAQ = [
  { q: "Como funciona o trial de 7 dias?", a: "Você cria sua conta e usa o Lumo completo (hábitos, metas, finanças e os 3 agentes de IA) por 7 dias, sem pagar nada. Só depois desse período a cobrança do plano escolhido começa a valer." },
  { q: "Preciso colocar cartão de crédito para testar?", a: "O cadastro do meio de pagamento é feito no início pra garantir a continuidade do acesso após o trial, mas você não é cobrado nesses 7 dias — e pode cancelar antes que a cobrança aconteça." },
  { q: "Posso cancelar quando quiser?", a: "Sim. Não tem fidelidade nem multa — você cancela direto pelo painel quando quiser, sem precisar justificar." },
  { q: "O app funciona em Android e iOS?", a: "Sim, o Lumo funciona nos dois sistemas, além de também poder ser acessado pelo navegador." },
  { q: "Preciso saber programar ou configurar algo manualmente?", a: "Não. O app é pronto pra usar — você só cria sua conta, adiciona seus hábitos/metas/gastos e já começa a receber o acompanhamento dos agentes." },
  { q: "Como funciona o reembolso?", a: "Como você já testa tudo grátis por 7 dias antes de qualquer cobrança, não corre risco. Em caso de problema após a cobrança, é só falar com o suporte." },
];

export default function Home() {
  const [ciclo, setCiclo] = useState<"mensal" | "anual">("anual");
  const [faqAberta, setFaqAberta] = useState<number | null>(null);

  const linkPlanoAtivo = ciclo === "anual" ? KIWIFY : KIWIFY_MENSAL;

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

        /* Nav responsiva: em telas pequenas some com os links secundários
           e encolhe o padding, senão a nav quebrava/estourava a largura */
        @media (max-width: 640px) {
          .lumo-nav { padding: 14px 16px !important; }
          .lumo-nav-links { display: none !important; }
          .lumo-nav-login-text { display: none !important; }
          .lumo-nav-login-icon { display: inline-flex !important; }
          .lumo-nav-cta { padding: 8px 16px !important; font-size: 13px !important; }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav className="lumo-nav" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "20px 40px", borderBottom: `1px solid ${C.border}`,
        position: "sticky", top: 0, zIndex: 50,
        backgroundColor: "rgba(14,26,20,0.95)", backdropFilter: "blur(12px)",
        gap: 12,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 8,
            border: `1px solid ${C.gold}`,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ fontSize: 14, color: C.gold }}>◈</span>
          </div>
          <span style={{ fontSize: 18, fontWeight: 700, letterSpacing: 2, color: C.cream }}>lumo</span>
        </div>
        <div className="lumo-nav-links" style={{ display: "flex", gap: 32, alignItems: "center" }}>
          <a href="#agentes" style={{ color: C.secondary, fontSize: 14, textDecoration: "none" }}>Agentes</a>
          <a href="#preco" style={{ color: C.secondary, fontSize: 14, textDecoration: "none" }}>Preço</a>
        </div>
        <div style={{ display: "flex", gap: 16, alignItems: "center", flexShrink: 0 }}>
          <a href="https://app.lumoapp.site/auth/login" className="lumo-nav-login-text" style={{ color: C.secondary, fontSize: 14, textDecoration: "none", whiteSpace: "nowrap" }}>
            Já tenho conta — Entrar
          </a>
          <a href="https://app.lumoapp.site/auth/login" className="lumo-nav-login-icon" aria-label="Entrar" style={{
            display: "none", color: C.secondary, fontSize: 13, textDecoration: "none",
            border: `1px solid ${C.border}`, borderRadius: 999, padding: "8px 14px",
          }}>
            Entrar
          </a>
          <a href={KIWIFY} target="_blank" rel="noopener noreferrer" className="lumo-nav-cta" style={{
            backgroundColor: C.cream, color: C.bg, padding: "10px 24px",
            borderRadius: 999, fontSize: 14, fontWeight: 700, textDecoration: "none",
            whiteSpace: "nowrap",
          }}>
            Começar agora
          </a>
        </div>
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
          lineHeight: 1.7, marginBottom: 32, maxWidth: 560,
        }}>
          Hábitos, metas e finanças em um só lugar — com agentes de IA que analisam seu progresso e te ajudam a evoluir todo dia.
        </p>

        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          backgroundColor: `${C.greenAccent}22`, border: `1px solid ${C.greenAccent}`,
          borderRadius: 999, padding: "8px 18px", marginBottom: 24,
        }}>
          <span style={{ color: C.greenAccent, fontSize: 13 }}>✓</span>
          <span style={{ fontSize: 13, color: C.cream, fontWeight: 600 }}>7 dias grátis para testar</span>
        </div>

        <a href={KIWIFY} target="_blank" rel="noopener noreferrer" style={{
          backgroundColor: C.gold, color: C.bg, padding: "18px 48px",
          borderRadius: 999, fontSize: 18, fontWeight: 700, textDecoration: "none",
          display: "inline-block", marginBottom: 16,
        }}>
          Testar grátis por 7 dias →
        </a>
        <p style={{ fontSize: 13, color: C.muted }}>7 dias grátis, depois cobrança automática · Cancele quando quiser</p>
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
              { icon: "🔥", title: "Hábitos com streak", desc: "Check-in diário, sequências, XP e gamificação que te mantém motivado mesmo nos dias difíceis.", mockup: "TODO: mockup da tela de Hábitos com streak ativo" },
              { icon: "🎯", title: "Metas com plano", desc: "Defina objetivos financeiros ou pessoais. O app calcula o caminho e acompanha cada passo.", mockup: "TODO: mockup da tela de Metas com progresso em %" },
              { icon: "💵", title: "Finanças rastreadas", desc: "Registre entradas e saídas, veja para onde seu dinheiro vai e tome decisões melhores.", mockup: "TODO: mockup da tela de Finanças com resumo do mês" },
            ].map(f => (
              <div key={f.title} style={{
                backgroundColor: C.card, borderRadius: 20,
                padding: 32, border: `1px solid ${C.border}`,
              }}>
                {/* Slot reservado pra print real da tela do app — troca este bloco
                    pela imagem quando o mockup estiver pronto */}
                <div style={{
                  aspectRatio: "16 / 10", borderRadius: 14, marginBottom: 20,
                  border: `1px dashed ${C.border}`, backgroundColor: C.cardAlt,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  padding: 16, textAlign: "center",
                }}>
                  <span style={{ color: C.muted, fontSize: 12, lineHeight: 1.5 }}>{f.mockup}</span>
                </div>
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

      {/* ── ANTES × COM LUMO ── */}
      <section style={{ padding: "100px 24px", borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <p style={{ color: C.gold, fontSize: 12, fontWeight: 600, letterSpacing: 2, textAlign: "center", marginBottom: 16 }}>✦ A TRANSFORMAÇÃO</p>
          <h2 style={{ ...playfair, fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, textAlign: "center", marginBottom: 56 }}>
            Antes <span style={{ color: C.muted, fontWeight: 400 }}>×</span>{" "}
            <em style={{ color: C.gold, fontStyle: "italic" }}>Com Lumo</em>
          </h2>
          <div style={{
            border: `1px solid ${C.border}`, borderRadius: 20, overflow: "hidden",
            backgroundColor: C.card,
          }}>
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
              padding: "16px 24px", borderBottom: `1px solid ${C.border}`,
            }}>
              <span style={{ color: C.muted, fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>ÁREA</span>
              <span style={{ color: C.muted, fontSize: 12, fontWeight: 700, letterSpacing: 1, textAlign: "center" }}>ANTES</span>
              <span style={{ color: C.gold, fontSize: 12, fontWeight: 700, letterSpacing: 1, textAlign: "center" }}>COM LUMO</span>
            </div>
            {ANTES_DEPOIS.map((row, i) => (
              <div key={row.area} style={{
                display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
                padding: "20px 24px", alignItems: "center",
                borderBottom: i < ANTES_DEPOIS.length - 1 ? `1px solid ${C.border}` : "none",
              }}>
                <span style={{ color: C.cream, fontSize: 15, fontWeight: 600 }}>{row.area}</span>
                <span style={{ color: C.secondary, fontSize: 14, textAlign: "center" }}>{row.antes}</span>
                <span style={{ color: C.greenAccent, fontSize: 14, fontWeight: 600, textAlign: "center" }}>{row.depois}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMO FUNCIONA ── */}
      <section style={{ padding: "100px 24px", borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <p style={{ color: C.gold, fontSize: 12, fontWeight: 600, letterSpacing: 2, textAlign: "center", marginBottom: 16 }}>✦ COMO FUNCIONA</p>
          <h2 style={{ ...playfair, fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, textAlign: "center", marginBottom: 64 }}>
            Três passos até sua{" "}
            <em style={{ color: C.gold, fontStyle: "italic" }}>nova rotina</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {COMO_FUNCIONA.map(p => (
              <div key={p.n} style={{
                backgroundColor: C.card, borderRadius: 20, padding: 32,
                border: `1px solid ${C.border}`, textAlign: "center",
              }}>
                <p style={{ color: C.gold, fontSize: 13, fontWeight: 700, letterSpacing: 2, marginBottom: 12 }}>{p.n}</p>
                <span style={{ fontSize: 32, display: "block", marginBottom: 16 }}>{p.icon}</span>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: C.cream, marginBottom: 10 }}>{p.title}</h3>
                <p style={{ color: C.secondary, fontSize: 14, lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ── */}
      <section style={{ padding: "100px 24px", borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ color: C.gold, fontSize: 12, fontWeight: 600, letterSpacing: 2, textAlign: "center", marginBottom: 16 }}>✦ RESULTADOS</p>
          <h2 style={{ ...playfair, fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, textAlign: "center", marginBottom: 16 }}>
            Quem já está na jornada
          </h2>
          {/* TODO: número agregado de usuários (ex: "+1.200 pessoas evoluindo com o Lumo")
              — adicionar aqui quando houver um número real pra mostrar */}
          <p style={{ textAlign: "center", marginBottom: 48 }} />
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
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: "50%",
                    backgroundColor: C.cardAlt, border: `1px solid ${C.goldBorder}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <span style={{ color: C.gold, fontSize: 13, fontWeight: 700 }}>{d.nome.charAt(0)}</span>
                  </div>
                  <div>
                    <p style={{ color: C.cream, fontWeight: 600, fontSize: 14 }}>{d.nome}</p>
                    <p style={{ color: C.muted, fontSize: 12 }}>{d.cargo}</p>
                  </div>
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
          <p style={{ color: C.secondary, fontSize: 18, lineHeight: 1.7, marginBottom: 16 }}>
            7 dias grátis antes da primeira cobrança — nos dois planos.
          </p>

          {/* Toggle Mensal / Anual */}
          <div style={{
            display: "inline-flex", backgroundColor: C.card, borderRadius: 999,
            padding: 4, border: `1px solid ${C.border}`, marginBottom: 40,
          }}>
            <button
              onClick={() => setCiclo("mensal")}
              style={{
                padding: "10px 22px", borderRadius: 999, border: "none", cursor: "pointer",
                fontSize: 14, fontWeight: 600,
                backgroundColor: ciclo === "mensal" ? C.gold : "transparent",
                color: ciclo === "mensal" ? C.bg : C.secondary,
              }}
            >
              Mensal
            </button>
            <button
              onClick={() => setCiclo("anual")}
              style={{
                padding: "10px 22px", borderRadius: 999, border: "none", cursor: "pointer",
                fontSize: 14, fontWeight: 600,
                backgroundColor: ciclo === "anual" ? C.gold : "transparent",
                color: ciclo === "anual" ? C.bg : C.secondary,
              }}
            >
              Anual · economize 63%
            </button>
          </div>

          <div style={{ maxWidth: 360, margin: "0 auto 40px" }}>
            <div style={{
              backgroundColor: C.greenDark, borderRadius: 20, padding: 32,
              border: `1px solid ${C.greenAccent}`, textAlign: "center", position: "relative",
            }}>
              {ciclo === "anual" && (
                <div style={{
                  position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
                  backgroundColor: C.gold, color: C.bg, fontSize: 11, fontWeight: 700,
                  padding: "4px 14px", borderRadius: 999, letterSpacing: 1, whiteSpace: "nowrap",
                }}>MELHOR OPÇÃO</div>
              )}
              <p style={{ color: C.greenAccent, fontSize: 13, fontWeight: 600, letterSpacing: 1, marginBottom: 16 }}>
                {ciclo === "anual" ? "ANUAL" : "MENSAL"}
              </p>
              {ciclo === "anual" ? (
                <>
                  <p style={{ fontSize: 40, fontWeight: 700, color: C.cream, marginBottom: 4 }}>R$ 297<span style={{ fontSize: 20 }}>,00</span></p>
                  <p style={{ color: C.muted, fontSize: 13, marginBottom: 10 }}>cobrado uma vez por ano</p>
                  <p style={{ color: C.gold, fontSize: 14, fontWeight: 600, marginBottom: 4 }}>equivalente a R$ 24,75/mês</p>
                  <p style={{ color: C.greenAccent, fontSize: 13, fontWeight: 600, marginBottom: 24 }}>economize R$ 507 vs. o mensal</p>
                </>
              ) : (
                <>
                  <p style={{ fontSize: 40, fontWeight: 700, color: C.cream, marginBottom: 4 }}>R$ 67<span style={{ fontSize: 20 }}>,00</span></p>
                  <p style={{ color: C.muted, fontSize: 13, marginBottom: 24 }}>cobrado todo mês · cancele quando quiser</p>
                </>
              )}
              <a href={linkPlanoAtivo} target="_blank" rel="noopener noreferrer" style={{
                display: "block", backgroundColor: C.gold, color: C.bg,
                padding: "14px", borderRadius: 999, fontSize: 14, fontWeight: 700,
                textDecoration: "none",
              }}>Garantir meu acesso</a>
            </div>
          </div>

          <p style={{ color: C.secondary, fontSize: 14, marginBottom: 64 }}>
            ✓ Acesso completo · ✓ 3 agentes de IA · ✓ Sem limite de hábitos e metas
          </p>

          {/* ── GARANTIA ── */}
          <div style={{
            display: "flex", flexDirection: "column", alignItems: "center", gap: 16,
            maxWidth: 480, margin: "0 auto", padding: "32px 28px",
            backgroundColor: C.card, border: `1px solid ${C.goldBorder}`, borderRadius: 20,
          }}>
            <span style={{ fontSize: 32 }}>🛡️</span>
            <p style={{ ...playfair, fontSize: 20, fontWeight: 700, color: C.cream }}>Risco zero pra você</p>
            <p style={{ color: C.secondary, fontSize: 14, lineHeight: 1.7 }}>
              7 dias grátis pra testar tudo antes de decidir. Sem burocracia, sem perguntas — se não for pra você, é só cancelar.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "100px 24px", borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p style={{ color: C.gold, fontSize: 12, fontWeight: 600, letterSpacing: 2, textAlign: "center", marginBottom: 16 }}>✦ DÚVIDAS</p>
          <h2 style={{ ...playfair, fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, textAlign: "center", marginBottom: 56 }}>
            Perguntas frequentes
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {FAQ.map((item, i) => {
              const aberta = faqAberta === i;
              return (
                <div key={item.q} style={{
                  backgroundColor: C.card, border: `1px solid ${C.border}`,
                  borderRadius: 14, overflow: "hidden",
                }}>
                  <button
                    onClick={() => setFaqAberta(aberta ? null : i)}
                    style={{
                      width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "18px 22px", background: "none", border: "none", cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span style={{ color: C.cream, fontSize: 15, fontWeight: 600 }}>{item.q}</span>
                    <span style={{ color: C.gold, fontSize: 18, flexShrink: 0, marginLeft: 12 }}>{aberta ? "−" : "+"}</span>
                  </button>
                  {aberta && (
                    <p style={{ color: C.secondary, fontSize: 14, lineHeight: 1.7, padding: "0 22px 20px" }}>
                      {item.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
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
          <p style={{ color: C.secondary, fontSize: 18, lineHeight: 1.7, marginBottom: 32 }}>
            7 dias grátis. Comece a construir sua rotina hoje.
          </p>
          <a href={KIWIFY} target="_blank" rel="noopener noreferrer" style={{
            display: "inline-block", backgroundColor: C.gold, color: C.bg,
            padding: "18px 48px", borderRadius: 999, fontSize: 16, fontWeight: 700,
            textDecoration: "none", marginBottom: 16,
          }}>
            Começar minha jornada agora →
          </a>
          <p style={{ color: C.muted, fontSize: 13 }}>7 dias grátis, depois cobrança automática · Cancele quando quiser</p>
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
