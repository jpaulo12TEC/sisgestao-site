import { COMPANY } from "./company.js";
import LegalPageLayout from "./LegalPageLayout.jsx";

export default function PrivacyPage() {
  return (
    <LegalPageLayout title="Política de Privacidade">
      <p className="legal-updated">Última atualização: 25 de junho de 2026</p>

      <section>
        <h2>1. Controlador dos dados</h2>
        <p>
          Esta Política de Privacidade descreve como tratamos dados pessoais no site{" "}
          <a href={COMPANY.domain}>{COMPANY.domain.replace("https://", "")}</a> e nos serviços
          oferecidos sob a marca {COMPANY.brand}.
        </p>
        <ul className="legal-list">
          <li>
            <strong>Razão social:</strong> {COMPANY.legalName}
          </li>
          <li>
            <strong>CNPJ:</strong> {COMPANY.cnpj}
          </li>
          <li>
            <strong>Marca comercial:</strong> {COMPANY.brand}
          </li>
          <li>
            <strong>E-mail de contato:</strong>{" "}
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
          </li>
          <li>
            <strong>Endereço:</strong> {COMPANY.address}
          </li>
        </ul>
      </section>

      <section>
        <h2>2. Dados que podemos coletar</h2>
        <p>Podemos tratar, conforme a interação com nossos canais:</p>
        <ul className="legal-list">
          <li>Nome, e-mail, telefone e mensagens enviadas por formulários ou WhatsApp;</li>
          <li>Dados técnicos de navegação (IP, navegador, páginas visitadas, cookies essenciais);</li>
          <li>Informações necessárias à prestação de serviços contratados.</li>
        </ul>
      </section>

      <section>
        <h2>3. Finalidades e bases legais</h2>
        <p>Utilizamos os dados para:</p>
        <ul className="legal-list">
          <li>Responder solicitações de contato e propostas comerciais;</li>
          <li>Executar contratos e prestar suporte;</li>
          <li>Cumprir obrigações legais e regulatórias;</li>
          <li>Melhorar a segurança e o funcionamento do site.</li>
        </ul>
        <p>
          O tratamento observa a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD), com
          base em consentimento, execução de contrato, legítimo interesse ou obrigação legal,
          conforme o caso.
        </p>
      </section>

      <section>
        <h2>4. Compartilhamento e retenção</h2>
        <p>
          Os dados podem ser compartilhados com prestadores de serviço essenciais (hospedagem,
          e-mail, ferramentas de atendimento), sempre com medidas de segurança compatíveis. Não
          vendemos dados pessoais. Mantemos as informações pelo tempo necessário às finalidades
          descritas ou exigido por lei.
        </p>
      </section>

      <section>
        <h2>5. Direitos do titular</h2>
        <p>
          Você pode solicitar confirmação de tratamento, acesso, correção, anonimização,
          portabilidade, eliminação ou informações sobre compartilhamentos, nos termos da LGPD.
          Envie sua solicitação para{" "}
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>, informando {COMPANY.legalName}{" "}
          (CNPJ {COMPANY.cnpj}) como controladora.
        </p>
      </section>

      <section>
        <h2>6. Segurança e alterações</h2>
        <p>
          Adotamos medidas técnicas e organizacionais para proteger os dados. Esta política pode ser
          atualizada; a versão vigente estará sempre disponível nesta página.
        </p>
      </section>
    </LegalPageLayout>
  );
}
