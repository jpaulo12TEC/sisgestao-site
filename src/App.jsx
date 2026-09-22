import { useEffect, useState } from "react";
import { COMPANY, whatsappLink } from "./company.js";
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

const ecosystem = [
  {
    num: "01",
    href: "#varejo",
    title: "Varejo",
    text: "O caixa abre, a venda acontece e o estoque precisa acompanhar.",
  },
  {
    num: "02",
    href: "#parceria",
    title: "Parceria",
    text: "Quando a rotina não cabe num produto pronto, o sistema nasce junto.",
  },
  {
    num: "03",
    href: "#publico",
    title: "Setor público",
    text: "A mesma clareza de processo, agora do lado de quem atende a cidade.",
  },
];

const pdvPoints = [
  "Ponto de venda no computador da loja",
  "Venda no balcão, inclusive por peso",
  "Caixa com operador e gerente",
];

const stockPoints = [
  "Produtos, preço e estoque mínimo",
  "Entrada e saída com a quantidade atualizada",
  "Aviso quando o item está acabando",
];

const partnerSteps = [
  { num: "01", title: "Escuta", text: "A rotina vem antes da tela." },
  { num: "02", title: "Desenho", text: "Módulos combinados com você." },
  { num: "03", title: "Construção", text: "Ciclos curtos, sistema visível." },
  { num: "04", title: "Virada", text: "Implantação, treino e suporte." },
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
            A história começa no balcão, segue quando o sistema precisa ser feito
            em parceria e chega ao órgão público. Um ecossistema, a mesma equipe.
          </p>
          <div className="hero-actions hero-line">
            <a className="button primary" href="#ecossistema">
              Conheça o ecossistema
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
              <span className="eco-card__go">Ver capítulo</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="section section-story" id="historia">
      <div className="container">
        <Reveal className="section-intro section-intro--light">
          <p className="kicker">História</p>
          <h2>Do primeiro item no caixa até o processo do órgão.</h2>
        </Reveal>

        <div className="chapters">
          <span className="chapters__rail" aria-hidden="true" />

          <Reveal as="article" className="chapter" id="varejo">
            <span className="chapter__index">01</span>
            <div className="chapter__body">
              <p className="kicker">Varejo</p>
              <h3>O dia começa no caixa.</h3>
              <p>
                Alguém pesa, cobra e segue para o próximo cliente. O PDV SuaVenda
                é o capítulo da loja: a venda fica registrada no computador do balcão.
              </p>
              <div className="chapter__panel">
                <img src="/brand/suavenda-logo.png" alt="Logo SuaVenda, PDV da SISgestão" />
                <div>
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
              </div>

              <div className="stock-row">
                <div>
                  <p className="kicker">Logo depois da venda</p>
                  <h3>O estoque precisa saber o que saiu.</h3>
                  <ul>
                    {stockPoints.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <a className="button secondary" href={WA.estoque} target="_blank" rel="noreferrer">
                    Falar sobre estoque
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal as="article" className="chapter" id="parceria" delay={40}>
            <span className="chapter__index">02</span>
            <div className="chapter__body">
              <p className="kicker">Parceria</p>
              <h3>Tem rotina que ainda não tem sistema.</h3>
              <p>
                Aí a SISgestão entra como parceira. A gente escuta a operação e
                constrói o que o catálogo não cobre — como a vitrine e o painel da
                Boutique da GI.
              </p>
              <div className="step-row">
                {partnerSteps.map((step) => (
                  <article key={step.num}>
                    <span>{step.num}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </article>
                ))}
              </div>
              <figure className="case-card">
                <img src="/brand/gi-modas-web.png" alt="Logo Gi Modas" />
                <figcaption>
                  <p className="kicker">Capítulo de loja</p>
                  <h3>Boutique da GI</h3>
                  <p>Vitrine para quem compra. Painel para quem vende e administra.</p>
                </figcaption>
              </figure>
              <a className="button primary" href={WA.parceria} target="_blank" rel="noreferrer">
                Quero uma parceria
              </a>
            </div>
          </Reveal>

          <Reveal as="article" className="chapter" id="publico" delay={40}>
            <span className="chapter__index">03</span>
            <div className="chapter__body">
              <p className="kicker">Setor público</p>
              <h3>A cidade também abre o expediente.</h3>
              <p>
                Órgão, câmara e gestão pública pedem processo claro. Licitação,
                rotina e um sistema que a equipe consiga usar no dia seguinte.
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
          <h2>O próximo capítulo começa numa conversa.</h2>
          <p className="contact-lead">
            Loja, parceria ou órgão. A resposta costuma sair no mesmo dia, pelo
            WhatsApp. Atendimento em Aracaju e à distância.
          </p>
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
        <Story />
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
