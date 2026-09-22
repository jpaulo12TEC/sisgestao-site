import logo from "../Capa = Insta.png";
import { COMPANY, INSTAGRAM_URL, WHATSAPP_URL } from "./company.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-main">
          <a className="brand footer-brand" href="/">
            <img src={logo} alt="" />
            <span>{COMPANY.brand}</span>
          </a>
          <p className="footer-tagline">Soluções inteligentes para gestão.</p>
          <p className="footer-operator">
            {COMPANY.legalName} — CNPJ {COMPANY.cnpj}
          </p>
        </div>

        <div className="footer-col">
          <p className="footer-label">Caminhos</p>
          <a href="/solucoes/varejo">Soluções para o varejo</a>
          <a href="/solucoes/personalizadas">Soluções personalizadas</a>
          <a href="/solucoes/orgaos-publicos">Órgãos públicos</a>
        </div>

        <div className="footer-col">
          <p className="footer-label">Contato</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            {COMPANY.phoneDisplay}
          </a>
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            @sisgestaosoft
          </a>
          <p className="footer-address">{COMPANY.address}</p>
        </div>
      </div>

      <div className="container footer-legal">
        <p>
          A marca {COMPANY.brand} é operada por {COMPANY.legalName}.
        </p>
        <div className="footer-links">
          <a href="/privacidade">Privacidade</a>
          <a href="/termos">Termos</a>
        </div>
      </div>
    </footer>
  );
}
