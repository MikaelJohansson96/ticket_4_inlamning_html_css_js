import React from "react";

export default function About() {
  return (
    <div className="container">
      <article className="page" aria-labelledby="about-heading">
        <h1 id="about-heading">Om mig</h1>

        <section aria-labelledby="bio-heading">
          <h2 id="bio-heading">Kort presentation</h2>
          <p>Jag heter Mikael och detta är ett exempel på en tillgänglig och responsiv webbplats i mörkt tema.</p>
        </section>

        <section aria-labelledby="skills-heading">
          <h2 id="skills-heading">Färdigheter</h2>
          <ul>
            <li>HTML &amp; semantisk struktur</li>
            <li>CSS &amp; responsiv design</li>
            <li>JavaScript &amp; React</li>
          </ul>
        </section>

        <section aria-labelledby="photo-heading">
          <h2 id="photo-heading">Profilbild</h2>
          <img src="/logo.png" alt="Profilbild: Mikaels logotyp" className="responsive" />
        </section>
      </article>
    </div>
  );
}

