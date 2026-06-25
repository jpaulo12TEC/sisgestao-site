import { useEffect, useState } from "react";
import logo from "../Capa = Insta.png";
import storyPreview from "../stories/stories 26.05.25 (1).png";
import { COMPANY, WHATSAPP_URL, INSTAGRAM_URL } from "./company.js";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import PrivacyPage from "./PrivacyPage.jsx";
import TermsPage from "./TermsPage.jsx";

const solutions = [
  {
    title: "Sistemas de gestão",
    text: "Plataformas web para controlar processos, equipes, documentos, atendimentos e áreas internas.",
    tag: "SaaS",
  },
  {
    title: "GED e processo digital",
    text: "Digitalização, indexação, protocolo, workflow, assinatura digital e armazenamento em nuvem.",
    tag: "Workflow",
  },
  {
    title: "Apps personalizados",
    text: "Aplicativos para serviços ao cidadão, rotinas internas, projetos municipais e demandas específicas.",
    tag: "Mobile",
  },
  {
    title: "Sites profissionais",
    text: "Sites modernos, responsivos e alinhados à identidade da sua empresa, entidade ou órgão público.",
    tag: "Web",
  },
  {
    title: "Dashboards e BI",
    text: "Painéis gerenciais, indicadores, relatórios e integrações para decisões mais rápidas e assertivas.",
    tag: "Dados",
  },
  {
    title: "Agentes de IA",
    text: "Assistentes inteligentes para automatizar atendimentos, consultas internas, triagem de demandas e tarefas repetitivas.",
    tag: "IA",
  },
  {
    title: "Gestão pública e legislativa",
    text: "Soluções para prefeituras, secretarias, câmaras, transparência, tramitação e atendimento.",
    tag: "GovTech",
  },
];

const differentials = [
  "Diagnóstico antes do desenvolvimento",
  "Implantação assistida e treinamento",
  "Integração com sistemas existentes",
  "Boas práticas de LGPD e segurança",
  "Interface simples para o usuário final",
  "Automação com IA e agentes inteligentes",
  "Suporte e evolução contínua",
];

const steps = [
  ["01", "Diagnóstico", "Mapeamos a rotina, os gargalos e os resultados que precisam aparecer."],
  ["02", "Desenho da solução", "Definimos módulos, fluxos, permissões, integrações e prioridades da primeira versão."],
  ["03", "Desenvolvimento", "Construímos com ciclos curtos, validações frequentes e foco em usabilidade."],
  ["04", "Implantação", "Configuramos, treinamos a equipe e acompanhamos a entrada em operação."],
];

const audiences = [
  "Prefeituras",
  "Câmaras municipais",
  "Secretarias",
  "Empresas",
  "Escritórios",
  "Cartórios",
  "Contabilidades",
  "Associações",
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

function DashboardMockup() {
  return (
    <div className="mockup-card" aria-label="Demonstração visual de dashboard">
      <div className="window-controls">
        <span />
        <span />
        <span />
      </div>

      <div className="mockup-grid">
        <div className="metric-card revenue">
          <small>Receita</small>
          <strong>R$ 126.450</strong>
          <span>+12,5%</span>
        </div>
        <div className="metric-card">
          <small>Agentes IA</small>
          <strong>24/7</strong>
          <span>Atendimento ativo</span>
        </div>
        <div className="chart-panel">
          <div className="chart-bars">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="task-panel">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero section" id="topo">
      <div className="hero-glow one" />
      <div className="hero-glow two" />

      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Soluções inteligentes para gestão</p>
          <h1>Tecnologia para organizar, controlar e fazer crescer.</h1>
          <p className="hero-text">
            A SISgestão cria sistemas, aplicativos, sites, dashboards e agentes de IA sob medida
            para transformar rotinas manuais em experiências digitais simples, seguras e eficientes.
          </p>

          <div className="hero-actions">
            <a className="button primary" href="#contato">
              Solicitar diagnóstico
            </a>
            <a className="button secondary" href="#solucoes">
              Ver soluções
            </a>
          </div>

          <div className="trust-row" aria-label="Destaques da SISgestão">
            <span>Gestão pública</span>
            <span>GED</span>
            <span>Dashboards</span>
            <span>Agentes de IA</span>
            <span>LGPD</span>
          </div>
        </div>

        <div className="hero-visual">
          <DashboardMockup />
          <img className="story-card" src={storyPreview} alt="Peça institucional da SISgestão" />
          <div className="floating-card">
            <strong>IA aplicada</strong>
            <span>menos tarefas repetitivas, mais inteligência na operação</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section className="section" id="solucoes">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Nossas soluções</p>
          <h2>Um portfólio para digitalizar o que hoje trava sua operação.</h2>
          <p>
            Do site institucional ao sistema completo: a SISgestão desenvolve tecnologia focada em
            controle, transparência, produtividade, IA aplicada e resultado.
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution) => (
            <article className="solution-card" key={solution.title}>
              <span>{solution.tag}</span>
              <h3>{solution.title}</h3>
              <p>{solution.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Audience() {
  return (
    <section className="audience section">
      <div className="container audience-grid">
        <div>
          <p className="eyebrow">Para quem é</p>
          <h2>Feito para organizações que precisam de ordem digital.</h2>
        </div>

        <div className="audience-list">
          {audiences.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Differentials() {
  return (
    <section className="section" id="diferenciais">
      <div className="container differentials-grid">
        <div className="dark-panel">
          <p className="eyebrow">Diferenciais</p>
          <h2>Sob medida, mas com método.</h2>
          <p>
            Nada de sistema genérico empurrado para dentro da sua rotina. Primeiro entendemos o
            problema, depois desenhamos uma solução que a equipe realmente consegue usar, com IA
            quando ela ajuda a ganhar velocidade, automatizar tarefas ou melhorar o atendimento.
          </p>
        </div>

        <div className="check-grid">
          {differentials.map((item) => (
            <div className="check-item" key={item}>
              <span>✓</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Method() {
  return (
    <section className="method section" id="metodo">
      <div className="container">
        <div className="section-heading compact">
          <p className="eyebrow">Como trabalhamos</p>
          <h2>Do diagnóstico à implantação, com acompanhamento.</h2>
        </div>

        <div className="steps-grid">
          {steps.map(([number, title, text]) => (
            <article className="step-card" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Security() {
  return (
    <section className="section security">
      <div className="container security-card">
        <div>
          <p className="eyebrow">Sua empresa protegida</p>
          <h2>Segurança, rastreabilidade e LGPD desde o início.</h2>
        </div>
        <p>
          Projetos pensados para organizar informações, controlar acessos, proteger dados sensíveis
          e dar clareza sobre o que acontece em cada etapa do processo.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact section" id="contato">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">Vamos conversar?</p>
          <h2>Pronto para levar sua gestão para outro nível?</h2>
          <p>
            Conte o que você precisa organizar. A SISgestão transforma sua necessidade em uma
            solução digital simples, segura e inteligente, inclusive com automações e agentes de IA.
          </p>

          <div className="company-info">
            <p className="eyebrow">Sobre a empresa</p>
            <p>
              <strong>{COMPANY.brand}</strong> é a marca comercial de{" "}
              <strong>{COMPANY.legalName}</strong>, inscrita no CNPJ{" "}
              <strong>{COMPANY.cnpj}</strong>.
            </p>
            <ul className="company-info-list">
              <li>
                <strong>Razão social:</strong> {COMPANY.legalName}
              </li>
              <li>
                <strong>CNPJ:</strong> {COMPANY.cnpj}
              </li>
              <li>
                <strong>Endereço:</strong> {COMPANY.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="contact-card">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            WhatsApp: {COMPANY.phoneDisplay}
          </a>
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            Instagram: @sisgestaosoft
          </a>
          <a className="button primary full" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            Solicitar diagnóstico
          </a>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Audience />
        <Differentials />
        <Method />
        <Security />
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
