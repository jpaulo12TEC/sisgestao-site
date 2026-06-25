import { COMPANY, WHATSAPP_URL } from "./company.js";
import LegalPageLayout from "./LegalPageLayout.jsx";

export default function TermsPage() {
  return (
    <LegalPageLayout title="Termos de Uso">
      <p className="legal-updated">Última atualização: 25 de junho de 2026</p>

      <section>
        <h2>1. Identificação da empresa</h2>
        <p>
          O site <a href={COMPANY.domain}>{COMPANY.domain.replace("https://", "")}</a> e a marca{" "}
          {COMPANY.brand} são operados por:
        </p>
        <ul className="legal-list">
          <li>
            <strong>Razão social:</strong> {COMPANY.legalName}
          </li>
          <li>
            <strong>CNPJ:</strong> {COMPANY.cnpj}
          </li>
          <li>
            <strong>E-mail:</strong> <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
          </li>
          <li>
            <strong>Endereço:</strong> {COMPANY.address}
          </li>
        </ul>
      </section>

      <section>
        <h2>2. Aceitação</h2>
        <p>
          Ao acessar este site ou utilizar nossos canais de contato, você declara ter lido e
          concordado com estes Termos de Uso e com a{" "}
          <a href="/privacidade">Política de Privacidade</a>.
        </p>
      </section>

      <section>
        <h2>3. Serviços</h2>
        <p>
          A {COMPANY.brand} desenvolve e comercializa soluções de software, sites, dashboards,
          integrações e serviços correlatos de tecnologia. Informações, valores e escopos
          apresentados no site têm caráter informativo e serão detalhados em proposta ou contrato
          específico.
        </p>
      </section>

      <section>
        <h2>4. Uso permitido</h2>
        <p>Você concorda em utilizar o site de forma lícita, sem:</p>
        <ul className="legal-list">
          <li>Tentar acessar áreas restritas ou sistemas sem autorização;</li>
          <li>Interferir no funcionamento, segurança ou disponibilidade do site;</li>
          <li>Reproduzir conteúdo sem permissão, salvo uso pessoal e não comercial limitado.</li>
        </ul>
      </section>

      <section>
        <h2>5. Propriedade intelectual</h2>
        <p>
          Textos, marcas, logotipos, layout e demais conteúdos do site pertencem a{" "}
          {COMPANY.legalName} ou a licenciantes, sendo protegidos pela legislação aplicável.
        </p>
      </section>

      <section>
        <h2>6. Limitação de responsabilidade</h2>
        <p>
          Empregamos esforços para manter o site atualizado e disponível, mas não garantimos
          ausência total de interrupções ou erros. Conteúdos de terceiros acessados por links
          externos são de responsabilidade de seus respectivos titulares.
        </p>
      </section>

      <section>
        <h2>7. Contato e foro</h2>
        <p>
          Dúvidas sobre estes termos podem ser enviadas para{" "}
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> ou pelo{" "}
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            WhatsApp {COMPANY.phoneDisplay}
          </a>
          . Aplica-se a legislação brasileira; fica eleito o foro da comarca do endereço da empresa,
          salvo disposição legal em contrário.
        </p>
      </section>
    </LegalPageLayout>
  );
}
