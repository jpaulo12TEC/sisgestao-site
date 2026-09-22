import { useEffect, useState } from "react";
import logo from "../Capa = Insta.png";
import { WHATSAPP_URL } from "./company.js";

const navItems = [
  { id: "topo", label: "Início", href: "/#topo" },
  { id: "ecossistema", label: "Ecossistema", href: "/#ecossistema" },
  { id: "solucoes", label: "Soluções", href: "/#solucoes" },
  { id: "contato", label: "Contato", href: "/#contato" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  function closeMenu() {
    setIsOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nodes = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);
    if (!nodes.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.15, 0.4] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`topbar${scrolled ? " is-scrolled" : ""}${isOpen ? " is-open" : ""}`}>
      <div className="topbar__bar">
        <a className="topbar__brand" href="/" onClick={closeMenu}>
          <img src={logo} alt="" />
          <span>SISgestão</span>
        </a>

        <button
          className="topbar__burger"
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

        <nav className="topbar__menu" id="site-menu" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.id ? "page" : undefined}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          <a className="btn btn-blue topbar__cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            Fale conosco
          </a>
        </nav>
      </div>
    </header>
  );
}
