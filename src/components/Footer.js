import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>© {new Date().getFullYear()} Mikael — Tillgänglig och responsiv webbplats i mörkt tema.</p>
        <p>
          <a href="/cv.pdf" download="Mikael_CV.pdf">Ladda ner CV</a>
          <span style={{ marginLeft: 8 }} />
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
      </div>
    </footer>
  );
}
