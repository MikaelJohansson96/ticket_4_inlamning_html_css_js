import React from "react";

export default function Projects() {
  return (
    <div className="container">
      <article className="page" aria-labelledby="projects-heading">
        <h1 id="projects-heading">Projekt</h1>

        <section aria-labelledby="projects-table-heading">
          <h2 id="projects-table-heading">Projektöversikt</h2>

          <div className="table-wrap" role="region" aria-labelledby="projects-table-heading">
            <table>
              <caption>Lista över projekt och status</caption>
              <thead>
                <tr>
                  <th scope="col">Projekt</th>
                  <th scope="col">Beskrivning</th>
                  <th scope="col">Teknik</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Portfolio</td>
                  <td>Min personliga portfolio</td>
                  <td>React, CSS</td>
                  <td>Publicerad</td>
                </tr>
                <tr>
                  <td>Spelprojekt</td>
                  <td>Prototyp av spel</td>
                  <td>Unity / JavaScript</td>
                  <td>Pågående</td>
                </tr>
                <tr>
                  <td>Verktyg</td>
                  <td>Små verktyg och skript</td>
                  <td>Node.js</td>
                  <td>Arkiverat</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="links-heading">
          <h2 id="links-heading">Länkar</h2>
          <ul>
            <li><a href="/cv.pdf" download="Mikael_CV.pdf">Ladda ner mitt CV</a></li>
            <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </section>
      </article>
    </div>
  );
}
