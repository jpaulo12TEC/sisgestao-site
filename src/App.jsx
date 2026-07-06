import { useEffect, useState } from "react";
import { COMPANY, WHATSAPP_URL, INSTAGRAM_URL } from "./company.js";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import PrivacyPage from "./PrivacyPage.jsx";
import TermsPage from "./TermsPage.jsx";
import BrandBackground, { SiteBackdrop } from "./components/BrandBackground.jsx";
import HeroRotatingText from "./components/HeroRotatingText.jsx";
import { Reveal } from "./hooks/useReveal.jsx";

import SolutionsShowcase, { CapabilitiesStrip } from "./components/SolutionCards.jsx";
import DiffIcon from "./components/DiffIcon.jsx";

const solutions = [
  { title: "Sistema de Gestão", image: "/solutions/sol-gestao.png" },
  { title: "Sites Institucionais", image: "/solutions/sol-site.png" },
  { title: "E-commerce", image: "/solutions/sol-ecommerce.png" },
  { title: "Aplicativos", image: "/solutions/sol-app.png" },
  { title: "Gestão pública e licitações", image: "/solutions/sol-gov.png" },
];

const capabilities = [
  { tag: "SaaS", label: "Sistemas de gestão" },
  { tag: "Workflow", label: "GED e processo digital" },
  { tag: "Mobile", label: "Apps personalizados" },
  { tag: "Web", label: "Sites profissionais" },
  { tag: "Dados", label: "Dashboards e BI" },
];

const differentials = [
  {
    icon: "diagnostic",
    title: "Diagnóstico antes de desenvolver",
    text: "Entendemos o processo, os gargalos e a rotina real antes de escrever uma linha de código.",
  },
  {
    icon: "deploy",
    title: "Implantação e treinamento",
    text: "Acompanhamos a virada de chave e capacitamos a equipe para usar o sistema no dia a dia.",
  },
  {
    icon: "integration",
    title: "Integração com sistemas",
    text: "Conectamos com o que você já usa — ERPs, planilhas, APIs e bancos de dados existentes.",
  },
  {
    icon: "shield",
    title: "LGPD e segurança",
    text: "Controle de acesso, criptografia e boas práticas de proteção de dados desde o início.",
  },
  {
    icon: "ai",
    title: "Automação com IA",
    text: "Fluxos inteligentes que eliminam tarefas repetitivas e aceleram decisões.",
  },
  {
    icon: "support",
    title: "Suporte contínuo",
    text: "Evolução, manutenção e atendimento próximo depois que o sistema entra no ar.",
  },
];

import MethodTrail from "./components/MethodTrail.jsx";

const steps = [
  { num: "01", title: "Diagnóstico", text: "Mapeamos rotina, gargalos e objetivos." },
  { num: "02", title: "Desenho", text: "Definimos módulos, fluxos e prioridades." },
  { num: "03", title: "Desenvolvimento", text: "Construímos com ciclos curtos de validação." },
  { num: "04", title: "Implantação", text: "Entregamos, treinamos e acompanhamos." },
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
    <section className="hero section section-dark" id="topo">
      <BrandBackground variant="hero" glow />
      <div className="container hero-inner">
        <Reveal className="hero-copy hero-copy--center">
          <div className="hero-label hero-label--center">
            <span className="hero-label__line" aria-hidden="true" />
            <span>Sites e aplicativos</span>
            <span className="hero-label__line hero-label__line--right" aria-hidden="true" />
          </div>

          <h1>
            Sistemas e apps
            <br />
            <HeroRotatingText />
          </h1>

          <div className="hero-actions hero-actions--center">
            <a className="button primary hero-cta" href="#contato">
              Solicitar Orçamento
            </a>
            <a className="button ghost hero-cta" href="#solucoes">
              Serviços que fazemos
            </a>
          </div>

          <p className="hero-stack" aria-label="Plataformas">
            Web <span aria-hidden="true">·</span> Mobile <span aria-hidden="true">·</span> Cloud{" "}
            <span aria-hidden="true">·</span> API <span aria-hidden="true">·</span> Dashboard
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section className="section section-solutions" id="solucoes">
      <BrandBackground variant="both" glow hideRightOnDesktop />
      <div className="container">
        <Reveal className="solutions-header">
          <div className="hero-label">
            <span className="hero-label__line" aria-hidden="true" />
            <span>Soluções</span>
          </div>
          <h2>
            Software sob
            <br />
            <span className="hero-title-light">medida.</span>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <SolutionsShowcase items={solutions} />
        </Reveal>

        <Reveal delay={250}>
          <CapabilitiesStrip items={capabilities} />
        </Reveal>
      </div>
    </section>
  );
}

function Differentials() {
  return (
    <section className="section section-dark" id="diferenciais">
      <BrandBackground variant="hero" glow />
      <div className="container">
        <Reveal className="diff-header">
          <div className="hero-label">
            <span className="hero-label__line" aria-hidden="true" />
            <span>Diferenciais</span>
          </div>
          <h2>
            Não é só código.
            <br />
            <span className="hero-title-light">É método.</span>
          </h2>
          <p className="diff-lead">
            Cada projeto passa por um processo pensado para entregar software que a
            equipe realmente usa — do diagnóstico ao suporte.
          </p>
        </Reveal>

        <div className="diff-grid">
          {differentials.map((item, index) => (
            <Reveal
              as="article"
              className="diff-card"
              key={item.title}
              delay={index * 70}
            >
              <span className="diff-card__num" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="diff-card__icon" aria-hidden="true">
                <DiffIcon name={item.icon} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Method() {
  return (
    <section className="section section-dark section-alt" id="metodo">
      <BrandBackground variant="both" glow hideRightOnDesktop />
      <div className="container">
        <Reveal className="method-header">
          <div className="hero-label">
            <span className="hero-label__line" aria-hidden="true" />
            <span>Método</span>
          </div>
          <h2>
            Diagnóstico
            <span className="method-arrow" aria-hidden="true"> → </span>
            Implantação.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <MethodTrail steps={steps} />
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section section-dark section-alt" id="contato">
      <BrandBackground variant="both" glow />
      <div className="container contact-grid">
        <Reveal>
          <div className="hero-label">
            <span className="hero-label__line" aria-hidden="true" />
            <span>Contato</span>
          </div>
          <h2>
            Vamos conversar
            <br />
            <span className="hero-title-light">sobre o seu projeto?</span>
          </h2>

          <p className="contact-lead">
            Conte o que você precisa organizar. A gente escuta, entende sua rotina
            e transforma isso em um sistema que funciona de verdade — sem
            complicação, no seu ritmo.
          </p>

          <p className="contact-hint">
            Resposta rápida pelo WhatsApp, geralmente no mesmo dia.
          </p>
        </Reveal>

        <Reveal className="contact-card" delay={100}>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            WhatsApp · {COMPANY.phoneDisplay}
          </a>
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            @sisgestaosoft
          </a>
          <a className="button primary full" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            Solicitar diagnóstico
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function HomePage() {
  useEffect(() => {
    if (window.location.hash) return;
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SiteBackdrop />
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Differentials />
        <Method />
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

  if (pathname === "/privacidade") {
    return <PrivacyPage />;
  }

  if (pathname === "/termos") {
    return <TermsPage />;
  }

  return <HomePage />;
}
