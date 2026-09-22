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

const doors = [
  {
    href: "/solucoes/varejo",
    num: "01",
    title: "Soluções para o varejo",
    text: "PDV e estoque para a rotina da loja e do balcão.",
  },
  {
    href: "/solucoes/personalizadas",
    num: "02",
    title: "Soluções personalizadas",
    text: "Gestão de estoque e sistemas feitos para a sua necessidade.",
  },
  {
    href: "/solucoes/orgaos-publicos",
    num: "03",
    title: "Soluções para órgãos públicos",
    text: "Processo e rotina para quem atende a cidade.",
  },
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
          <h2>Três frentes. Escolha a sua.</h2>
        </Reveal>
        <div className="catalog">
          {doors.map((item, index) => (
            <Reveal as="a" className="catalog-card catalog-link" href={item.href} key={item.href} delay={index * 80}>
              <span className="eco-card__num">{item.num}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="eco-card__go">Abrir página</span>
            </Reveal>
          ))}
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
