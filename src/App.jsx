import { useEffect, useState } from "react";
import { COMPANY, whatsappLink } from "./company.js";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import PrivacyPage from "./PrivacyPage.jsx";
import TermsPage from "./TermsPage.jsx";
import { Reveal } from "./hooks/useReveal.jsx";

const WA = {
  pdv: whatsappLink("Olá, quero conhecer o PDV SuaVenda para a minha loja."),
  estoque: whatsappLink("Olá, quero uma gestão de estoque personalizada para a minha operação."),
  publico: whatsappLink("Olá, preciso de um sistema para órgão público."),
  geral: whatsappLink("Olá, quero conversar com a SISgestão."),
};

const ecosystem = [
  {
    num: "01",
    href: "#estoque",
    title: "Estoque",
    text: "Gestão de estoque desenhada para a rotina da sua operação.",
  },
  {
    num: "02",
    href: "#varejo",
    title: "PDV",
    text: "O caixa da loja, com a venda registrada no balcão.",
  },
  {
    num: "03",
    href: "#publico",
    title: "Setor público",
    text: "Processo claro para quem atende a cidade.",
  },
];

const stockPoints = [
  "Montado para a sua operação, não um pacote igual para todo mundo",
  "Produtos, preço, categorias e estoque mínimo do seu jeito",
  "Entrada e saída com a quantidade atualizada na hora",
  "Aviso quando o item está acabando",
];

const pdvPoints = [
  "Ponto de venda no computador da loja",
  "Venda no balcão, inclusive por peso",
  "Caixa com operador e gerente",
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

function Hero() {
  return (
    <section className="section hero hero-story" id="topo">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="kicker kicker-in">SISgestão · Aracaju</p>
          <h1>
            <span className="hero-line">Soluções inteligentes</span>
            <span className="hero-line">
              para a gestão <em>de verdade.</em>
            </span>
          </h1>
          <p className="hero-lead hero-line">
            Gestão de estoque feita para a sua operação, PDV no balcão e sistemas
            para o setor público. Um ecossistema, a mesma equipe.
          </p>
          <div className="hero-actions hero-line">
            <a className="button primary" href="#solucoes">
              Ver nossas soluções
            </a>
            <a className="button secondary" href={WA.geral} target="_blank" rel="noreferrer">
              Fale conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ecosystem() {
  return (
    <section className="section section-muted" id="ecossistema">
      <div className="container">
        <Reveal className="section-intro">
          <p className="kicker">Ecossistema</p>
          <h2>Três caminhos. Uma forma de trabalhar.</h2>
        </Reveal>
        <div className="eco-grid">
          {ecosystem.map((item, index) => (
            <Reveal as="a" className="eco-card" href={item.href} key={item.num} delay={index * 90}>
              <span className="eco-card__num">{item.num}</span>
              <strong>{item.title}</strong>
              <span>{item.text}</span>
              <span className="eco-card__go">Ver solução</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section className="section section-story" id="solucoes">
      <div className="container">
        <Reveal className="section-intro section-intro--light">
          <p className="kicker">Nossas soluções</p>
          <h2>Estoque sob medida, PDV e setor público.</h2>
        </Reveal>

        <div className="chapters">
          <span className="chapters__rail" aria-hidden="true" />

          <Reveal as="article" className="chapter chapter--lead" id="estoque">
            <span className="chapter__index">01</span>
            <div className="chapter__body">
              <p className="kicker">Gestão de estoque</p>
              <h3>Personalizada para a sua necessidade.</h3>
              <p>
                Cada operação conta o estoque de um jeito. A SISgestão desenha o
                controle de produtos, entradas e saídas em cima da sua rotina —
                o que entra, o que sai e o que não pode faltar.
              </p>
              <ul>
                {stockPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <a className="button primary" href={WA.estoque} target="_blank" rel="noreferrer">
                Quero o estoque da minha operação
              </a>
            </div>
          </Reveal>

          <Reveal as="article" className="chapter" id="varejo" delay={40}>
            <span className="chapter__index">02</span>
            <div className="chapter__body">
              <div className="solution-title">
                <img className="solution-mark" src="/brand/suavenda-icon.png" alt="" />
                <div>
                  <p className="kicker">Ponto de venda</p>
                  <h3>SuaVenda no balcão.</h3>
                </div>
              </div>
              <p>
                O PDV da SISgestão para quem vende no caixa. A venda fica
                registrada no computador da loja, inclusive no comércio por peso.
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
              <a className="button primary" href={WA.pdv} target="_blank" rel="noreferrer">
                Quero o PDV na minha loja
              </a>
            </div>
          </Reveal>

          <Reveal as="article" className="chapter" id="publico" delay={40}>
            <span className="chapter__index">03</span>
            <div className="chapter__body">
              <p className="kicker">Setor público</p>
              <h3>Processo para quem atende a cidade.</h3>
              <p>
                Órgão, câmara e gestão pública pedem rotina clara. Licitação,
                processo e um sistema que a equipe consiga usar.
              </p>
              <ul className="public-list">
                {publicPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <a className="button primary" href={WA.publico} target="_blank" rel="noreferrer">
                Falar sobre o órgão
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section section-cta" id="contato">
      <div className="container contact-grid">
        <Reveal>
          <p className="kicker">Contato</p>
          <h2>Conta qual solução você precisa.</h2>
          <p className="contact-lead">
            Estoque sob medida, PDV ou órgão público. A resposta costuma sair no
            mesmo dia, pelo WhatsApp. Atendimento em Aracaju e à distância.
          </p>
        </Reveal>
        <Reveal className="contact-card" delay={80}>
          <a href={WA.estoque} target="_blank" rel="noreferrer">
            WhatsApp · estoque personalizado
          </a>
          <a href={WA.pdv} target="_blank" rel="noreferrer">
            WhatsApp · PDV SuaVenda
          </a>
          <a href={WA.publico} target="_blank" rel="noreferrer">
            WhatsApp · setor público
          </a>
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
          <a className="button primary full" href={WA.geral} target="_blank" rel="noreferrer">
            Fale conosco · {COMPANY.phoneDisplay}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function HomePage() {
  useEffect(() => {
    document.title = "SISgestão | Soluções inteligentes para gestão";
    if (window.location.hash) return;
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ecosystem />
        <Solutions />
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
    document.body.classList.add("theme-sis");
    return () => document.body.classList.remove("theme-sis");
  }, []);

  if (pathname === "/privacidade") {
    return <PrivacyPage />;
  }

  if (pathname === "/termos") {
    return <TermsPage />;
  }

  return <HomePage />;
}
