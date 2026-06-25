import { useEffect } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function LegalPageLayout({ title, children }) {
  useEffect(() => {
    document.title = `${title} | SISgestão`;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="container legal-content">
          <h1>{title}</h1>
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
