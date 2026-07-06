import logo from "../Capa = Insta.png";
import { COMPANY } from "./company.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-main">
          <a className="brand footer-brand" href="/">
            <img src={logo} alt="" />
            <span>{COMPANY.brand}</span>
          </a>
          <p className="footer-tagline">Software de gestão · Web e mobile.</p>
          <p className="footer-legal-name">
            {COMPANY.legalName} — CNPJ {COMPANY.cnpj}
          </p>
          <p className="footer-operator">
            A marca {COMPANY.brand} é operada por {COMPANY.legalName}, inscrita no CNPJ{" "}
            {COMPANY.cnpj}.
          </p>
        </div>

        <div className="footer-links">
          <a href="/privacidade">Política de Privacidade</a>
          <a href="/termos">Termos de Uso</a>
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
        </div>
      </div>
    </footer>
  );
}
