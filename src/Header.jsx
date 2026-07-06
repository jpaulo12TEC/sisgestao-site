import { useEffect, useState } from "react";
import logo from "../Capa = Insta.png";
import { WHATSAPP_URL } from "./company.js";

const navItems = [
  { label: "Soluções", href: "/#solucoes" },
  { label: "Diferenciais", href: "/#diferenciais" },
  { label: "Método", href: "/#metodo" },
  { label: "Contato", href: "/#contato" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Navegação principal">
        <a className="brand" href="/" onClick={closeMenu}>
          <img src={logo} alt="Logo da SISgestão" />
          <span>SISgestão</span>
        </a>

        <button
          className={`menu-button${isOpen ? " is-open" : ""}`}
          type="button"
          aria-expanded={isOpen}
          aria-controls="site-menu"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          className={`nav-overlay${isOpen ? " is-open" : ""}`}
          aria-hidden="true"
          onClick={closeMenu}
        />

        <div className={`nav-links${isOpen ? " is-open" : ""}`} id="site-menu">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            Fale conosco
          </a>
        </div>
      </nav>
    </header>
  );
}
