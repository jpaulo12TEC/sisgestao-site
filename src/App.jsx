import { useEffect, useState } from "react";
import { COMPANY, whatsappLink } from "./company.js";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import PrivacyPage from "./PrivacyPage.jsx";
import TermsPage from "./TermsPage.jsx";
import { PublicoPage, PersonalizadasPage, VarejoPage } from "./SolutionPages.jsx";
import { Reveal } from "./hooks/useReveal.jsx";

const WA = {
  pdv: whatsappLink("Olá, quero conhecer o PDV SuaVenda para a minha loja."),
  estoque: whatsappLink("Olá, quero uma gestão de estoque personalizada para a minha operação."),
  publico: whatsappLink("Olá, preciso de um sistema para órgão público."),
  geral: whatsappLink("Olá, quero conversar com a SISgestão."),
};

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
            <a className="btn btn-blue" href="#solucoes">
              Ver nossas soluções
            </a>
            <a className="btn btn-line" href={WA.geral} target="_blank" rel="noreferrer">
              Fale conosco
            </a>
          </div>
        </div>
        <figure className="hero-visual">
          <img
            src="/hero-sisgestao.png"
            alt="Ponto de venda, estoque e gestão pública no mesmo ecossistema."
          />
        </figure>
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section className="section section-catalog" id="solucoes">
      <div className="container">
        <Reveal className="section-intro">
          <p className="kicker">Nossas soluções</p>
          <h2>Estoque sob medida, PDV e setor público.</h2>
        </Reveal>
        <div className="catalog">
          <Reveal as="article" className="catalog-card catalog-card--lead" id="estoque">
            <p className="kicker">Soluções personalizadas</p>
            <h3>Personalizada para a sua necessidade.</h3>
            <p>
              Cada operação conta o estoque de um jeito. O controle de produtos,
              entradas e saídas nasce da sua rotina.
            </p>
            <ul>
              {stockPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <a className="btn btn-blue" href="/solucoes/personalizadas">
              Abrir a página
            </a>
          </Reveal>

          <Reveal as="article" className="catalog-card" id="varejo" delay={80}>
            <div className="solution-title">
              <img className="solution-mark" src="/brand/suavenda-icon.png" alt="" />
              <div>
                <p className="kicker">Soluções para o varejo</p>
                <h3>SuaVenda</h3>
              </div>
            </div>
            <p>
              O PDV para quem vende no caixa. A venda fica no computador da loja,
              inclusive no comércio por peso.
            </p>
            <ul>
              {pdvPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="fine-print">
              A emissão de NFC-e em produção ainda está em preparação. O caixa já
              organiza a venda no balcão.
            </p>
            <a className="btn btn-blue" href="/solucoes/varejo">
              Abrir a página
            </a>
          </Reveal>

          <Reveal as="article" className="catalog-card" id="publico" delay={140}>
            <p className="kicker">Soluções para órgãos públicos</p>
            <h3>Para quem atende a cidade.</h3>
            <p>
              Órgão, câmara e gestão pública, com processo claro e um sistema que
              a equipe consiga usar.
            </p>
            <ul>
              {publicPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <a className="btn btn-blue" href="/solucoes/orgaos-publicos">
              Abrir a página
            </a>
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
          <a className="btn btn-blue btn-block" href={WA.geral} target="_blank" rel="noreferrer">
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

  if (pathname === "/solucoes/varejo") {
    return <VarejoPage />;
  }

  if (pathname === "/solucoes/personalizadas") {
    return <PersonalizadasPage />;
  }

  if (pathname === "/solucoes/orgaos-publicos") {
    return <PublicoPage />;
  }

  return <HomePage />;
}
