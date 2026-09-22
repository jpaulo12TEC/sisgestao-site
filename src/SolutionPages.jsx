import { useEffect } from "react";
import { COMPANY, whatsappLink } from "./company.js";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const WA = {
  varejo: whatsappLink("Olá, quero soluções de varejo: PDV e estoque para a minha loja."),
  personalizadas: whatsappLink("Olá, quero uma solução personalizada de gestão de estoque."),
  publico: whatsappLink("Olá, preciso de uma solução para órgão público."),
};

function SolutionLayout({ title, kicker, lead, children }) {
  useEffect(() => {
    document.title = `${title} | SISgestão`;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <>
      <Header />
      <main className="solution-page">
        <div className="container">
          <p className="crumb">
            <a href="/">Home</a>
            <span aria-hidden="true"> / </span>
            <a href="/#solucoes">Soluções</a>
            <span aria-hidden="true"> / </span>
            <span>{kicker}</span>
          </p>
          <p className="kicker">{kicker}</p>
          <h1>{title}</h1>
          <p className="solution-lead">{lead}</p>
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}

function OfferGrid({ items }) {
  return (
    <div className="offer-grid">
      {items.map((item) => (
        <article className="offer-card" key={item.title}>
          <p className="kicker">{item.kicker}</p>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  );
}

function CloseBand({ href, label }) {
  return (
    <div className="solution-close">
      <h2>Quer ver isso na sua operação?</h2>
      <p>A resposta costuma sair no mesmo dia, pelo WhatsApp. Atendimento em Aracaju e à distância.</p>
      <a className="btn btn-blue" href={href} target="_blank" rel="noreferrer">
        {label} · {COMPANY.phoneDisplay}
      </a>
    </div>
  );
}

export function VarejoPage() {
  return (
    <SolutionLayout
      kicker="Varejo"
      title="Soluções para o varejo."
      lead="PDV e gestão de estoque para a loja que vive de balcão. A venda acontece, o caixa registra e o estoque acompanha — com implantação perto de quem opera, em Aracaju."
    >
      <OfferGrid
        items={[
          {
            kicker: "PDV",
            title: "SuaVenda",
            text: "Ponto de venda no computador da loja. Venda no balcão, inclusive por peso, com caixa de operador e gerente.",
          },
          {
            kicker: "Estoque",
            title: "Controle da loja",
            text: "Produtos, entradas, saídas e aviso quando o item está acabando, ligado à rotina do caixa.",
          },
          {
            kicker: "Implantação",
            title: "Entrada em operação",
            text: "Configuração, treino de quem opera o caixa e acompanhamento para a loja não parar na virada.",
          },
          {
            kicker: "Suporte",
            title: "Perto da operação",
            text: "Atendimento em Aracaju e à distância, para ajustar o sistema depois que ele entra no dia a dia.",
          },
        ]}
      />
      <p className="fine-print solution-note">
        A emissão de NFC-e em produção ainda está em preparação. O caixa já organiza a venda no balcão.
      </p>
      <CloseBand href={WA.varejo} label="Falar sobre o varejo" />
    </SolutionLayout>
  );
}

export function PersonalizadasPage() {
  return (
    <SolutionLayout
      kicker="Personalizadas"
      title="Soluções personalizadas."
      lead="Gestão de estoque e sistemas feitos para a sua necessidade. Não é um pacote igual para todo mundo: a rotina da operação define o que entra no sistema."
    >
      <ol className="fit-steps">
        <li>
          <span>01</span>
          <div>
            <h2>Escuta</h2>
            <p>A gente entende como a operação conta produto, entrada e saída antes de desenhar tela.</p>
          </div>
        </li>
        <li>
          <span>02</span>
          <div>
            <h2>Desenho</h2>
            <p>Categorias, estoque mínimo, preço e alertas combinados com quem usa todo dia.</p>
          </div>
        </li>
        <li>
          <span>03</span>
          <div>
            <h2>Construção</h2>
            <p>O sistema cresce em ciclos curtos, para você ver o controle funcionar na sua rotina.</p>
          </div>
        </li>
        <li>
          <span>04</span>
          <div>
            <h2>Virada</h2>
            <p>Implantação, treino da equipe e suporte depois que o estoque passa a ser o do sistema.</p>
          </div>
        </li>
      </ol>
      <CloseBand href={WA.personalizadas} label="Quero uma solução sob medida" />
    </SolutionLayout>
  );
}

export function PublicoPage() {
  return (
    <SolutionLayout
      kicker="Órgãos públicos"
      title="Soluções para órgãos públicos."
      lead="Sistemas para a rotina de quem atende a cidade: processo claro, licitação e uma implantação que a equipe consiga usar."
    >
      <div className="public-catalog">
        <article>
          <p className="kicker">Gestão pública</p>
          <h2>Rotina do órgão</h2>
          <p>Organização do expediente e dos fluxos que a equipe repete todo dia.</p>
        </article>
        <article>
          <p className="kicker">Gestão pública</p>
          <h2>Licitações e processo</h2>
          <p>Apoio para deixar licitação e processo mais claros para quem conduz e para quem acompanha.</p>
        </article>
        <article>
          <p className="kicker">Gestão pública</p>
          <h2>Implantação e treinamento</h2>
          <p>Virada acompanhada, com a equipe treinada para usar o sistema no dia seguinte.</p>
        </article>
      </div>
      <CloseBand href={WA.publico} label="Falar sobre o órgão" />
    </SolutionLayout>
  );
}
