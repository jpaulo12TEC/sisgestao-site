import { useEffect, useState } from "react";
import { COMPANY, INSTAGRAM_URL, whatsappLink } from "./company.js";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import PrivacyPage from "./PrivacyPage.jsx";
import TermsPage from "./TermsPage.jsx";
import { Reveal } from "./hooks/useReveal.jsx";

const WA = {
  pdv: whatsappLink("Olá, quero conhecer o PDV SuaVenda para a minha loja."),
  estoque: whatsappLink("Olá, quero conhecer a gestão de estoque da SISgestão."),
  parceria: whatsappLink("Olá, quero uma parceria para um sistema sob medida."),
  publico: whatsappLink("Olá, preciso de um sistema para órgão público."),
  geral: whatsappLink("Olá, quero conversar com a SISgestão."),
};

const paths = [
  {
    href: "#varejo",
    kicker: "Varejo",
    title: "PDV e estoque",
    text: "Caixa no balcão e controle do que entra e sai da loja.",
    tone: "retail",
  },
  {
    href: "#parceria",
    kicker: "Parceria",
    title: "Sistema sob medida",
    text: "Quando a rotina ainda não cabe num produto pronto.",
    tone: "partner",
  },
  {
    href: "#publico",
    kicker: "Setor público",
    title: "Órgãos e licitações",
    text: "Gestão e processo para quem atende a cidade.",
    tone: "public",
  },
];

const pdvPoints = [
  "Ponto de venda no computador da loja",
  "Venda no balcão, inclusive por peso",
  "Caixa com operador e gerente",
];

const stockPoints = [
  "Cadastro de produtos, preço e estoque mínimo",
  "Entrada e saída com atualização da quantidade",
  "Aviso quando o item está acabando",
];

const partnerSteps = [
  { num: "01", title: "Escuta", text: "A gente senta na rotina antes de desenhar tela." },
  { num: "02", title: "Desenho", text: "Módulos e prioridades combinados com você." },
  { num: "03", title: "Construção", text: "Ciclos curtos, para você ver o sistema crescer." },
  { num: "04", title: "Virada", text: "Implantação, treino da equipe e suporte depois." },
];

const publicPoints = [
  "Sistemas para a rotina do órgão",
  "Apoio a licitações e processo",
  "Implantação próxima, com treinamento",
];

function usePathname() {
  const [pathname, setPathname] = useState(() => window.location.pathname);

  useEffect(() => {
    function onPopState() {
      setPathname(window.location.pathname);
    }

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return pathname;
}

function Kicker({ children }) {
  return <p className="kicker">{children}</p>;
}

function Hero() {
  return (
    <section className="section hero hero-warm" id="topo">
      <div className="container hero-inner">
        <Reveal className="hero-copy hero-copy--center">
          <Kicker>SISgestão · Aracaju</Kicker>
          <h1>Ponto de venda para quem vive de balcão.</h1>
          <p className="hero-lead">
            A SISgestão entra no varejo com o PDV SuaVenda e a gestão de estoque.
            Também faz parceria quando o sistema precisa ser seu — e abre uma porta
            para o setor público.
          </p>
          <div className="hero-actions hero-actions--center">
            <a className="button primary button-retail hero-cta" href="#varejo">
              Ver o PDV
            </a>
            <a className="button ghost hero-cta" href={WA.geral} target="_blank" rel="noreferrer">
              Falar no WhatsApp
            </a>
          </div>
        </Reveal>

        <div className="path-grid">
          {paths.map((item, index) => (
            <Reveal as="a" className={`path-card path-card--${item.tone}`} href={item.href} key={item.href} delay={index * 80}>
              <span className="path-card__kicker">{item.kicker}</span>
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Retail() {
  return (
    <section className="section section-warm" id="varejo">
      <div className="container">
        <Reveal className="section-intro">
          <Kicker>Varejo</Kicker>
          <h2>Produtos para a loja, começando pelo caixa.</h2>
          <p>
            Dois sistemas da casa para o comércio: o ponto de venda SuaVenda e a
            gestão de estoque. Feitos para a rotina do balcão, não para um slide.
          </p>
        </Reveal>

        <div className="retail-grid">
          <Reveal as="article" className="pdv-panel">
            <div className="pdv-panel__brand">
              <img src="/brand/suavenda-logo.png" alt="Logo SuaVenda, PDV da SISgestão" />
            </div>
            <div className="pdv-panel__copy">
              <div className="product-name">
                <img src="/brand/suavenda-icon.png" alt="" />
                <div>
                  <p className="kicker">Ponto de venda</p>
                  <h3>SuaVenda</h3>
                </div>
              </div>
              <p>
                O PDV da SISgestão para quem vende no balcão. Caixa, venda e o
                peso do dia — inclusive no comércio a quilo — no programa da loja.
              </p>
              <ul>
                {pdvPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className="fine-print">
                A emissão de NFC-e em produção ainda está em preparação. O caixa
                já organiza a venda no balcão.
              </p>
              <a className="button primary button-retail" href={WA.pdv} target="_blank" rel="noreferrer">
                Quero o PDV na minha loja
              </a>
            </div>
          </Reveal>

          <Reveal as="article" className="stock-panel" delay={100}>
            <span className="mark mark--stock" aria-hidden="true">
              <svg viewBox="0 0 48 48" width="36" height="36">
                <rect x="6" y="8" width="16" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
                <rect x="26" y="8" width="16" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
                <rect x="6" y="26" width="16" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
                <rect x="26" y="26" width="16" height="14" rx="3" fill="currentColor" opacity="0.18" stroke="currentColor" strokeWidth="2" />
              </svg>
            </span>
            <p className="kicker">Ao lado do caixa</p>
            <h3>Gestão de estoque</h3>
            <p>Para saber o que tem na loja antes de faltar na prateleira.</p>
            <ul>
              {stockPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <a className="button secondary" href={WA.estoque} target="_blank" rel="noreferrer">
              Falar sobre estoque
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Partnership() {
  return (
    <section className="section section-warm section-warm--sand" id="parceria">
      <div className="container">
        <Reveal className="section-intro">
          <Kicker>Parceria</Kicker>
          <h2>Quando o sistema ainda não existe, a gente faz com você.</h2>
          <p>
            Sites, aplicativos e sistemas de gestão desenhados na rotina de quem
            vai usar. A parceria começa pela escuta, não pelo catálogo.
          </p>
        </Reveal>

        <div className="partner-grid">
          <Reveal className="partner-steps">
            {partnerSteps.map((step) => (
              <article key={step.num}>
                <span>{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </Reveal>

          <Reveal as="article" className="case-card" delay={80}>
            <img src="/brand/gi-modas-web.png" alt="Logo Gi Modas" />
            <div className="case-card__caption">
              <p className="kicker">Parceria em loja</p>
              <h3>Boutique da GI</h3>
              <p>Vitrine da loja e painel para quem vende e para quem administra.</p>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <a className="button primary" href={WA.parceria} target="_blank" rel="noreferrer">
            Quero uma parceria
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function PublicSector() {
  return (
    <section className="section section-warm section-warm--public" id="publico">
      <div className="container public-grid">
        <Reveal>
          <Kicker>Setor público</Kicker>
          <h2>A mesma proximidade, do outro lado do balcão da cidade.</h2>
          <p className="section-lead">
            Para órgão, câmara e gestão pública que precisa de processo claro —
            licitação, rotina e sistema que a equipe consiga usar.
          </p>
          <a className="button primary button-public" href={WA.publico} target="_blank" rel="noreferrer">
            Falar sobre o órgão
          </a>
        </Reveal>

        <Reveal as="ul" className="public-list" delay={80}>
          {publicPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section section-warm" id="contato">
      <div className="container contact-grid">
        <Reveal>
          <Kicker>Contato</Kicker>
          <h2>Conta em qual porta você está.</h2>
          <p className="contact-lead">
            Loja, parceria ou órgão público. A resposta costuma sair no mesmo dia,
            pelo WhatsApp.
          </p>
          <p className="contact-hint">Atendimento em Aracaju e à distância.</p>
        </Reveal>

        <Reveal className="contact-card" delay={80}>
          <a href={WA.pdv} target="_blank" rel="noreferrer">
            WhatsApp · PDV SuaVenda
          </a>
          <a href={WA.parceria} target="_blank" rel="noreferrer">
            WhatsApp · parceria
          </a>
          <a href={WA.publico} target="_blank" rel="noreferrer">
            WhatsApp · setor público
          </a>
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            @sisgestaosoft
          </a>
          <a className="button primary full" href={WA.geral} target="_blank" rel="noreferrer">
            Chamar no WhatsApp · {COMPANY.phoneDisplay}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function HomePage() {
  useEffect(() => {
    document.title = "SISgestão | PDV, parceria e setor público";
    if (window.location.hash) return;
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Retail />
        <Partnership />
        <PublicSector />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function normalizePath(pathname) {
  return pathname.replace(/\/+$/, "") || "/";
}

export default function App() {
  const pathname = normalizePath(usePathname());

  useEffect(() => {
    document.body.classList.add("theme-warm");
    return () => document.body.classList.remove("theme-warm");
  }, []);

  if (pathname === "/privacidade") {
    return <PrivacyPage />;
  }

  if (pathname === "/termos") {
    return <TermsPage />;
  }

  return <HomePage />;
}
