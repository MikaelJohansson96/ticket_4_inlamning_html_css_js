import React from "react";
import DownloadSection from "../components/DownloadSection";
import SignupForm from "../components/SignupForm";

export default function Home() {
  return (
    <div className="container">
      <article className="page" aria-labelledby="home-heading">
        <h1 id="home-heading">Välkommen till min portfolio</h1>

        <p>En flersidig, responsiv och tillgänglig webbplats i mörkt tema.</p>

        <section aria-labelledby="features-heading">
          <h2 id="features-heading">Vad du hittar här</h2>
          <ul>
            <li>Presentation och bakgrund</li>
            <li>Projektlista med tabell</li>
            <li>Inbäddad video</li>
            <li>Filer att ladda ner och ladda upp</li>
          </ul>
        </section>

        <section aria-labelledby="video-heading">
          <h2 id="video-heading">Introduktionsvideo</h2>
          <div className="media-wrap" aria-hidden="false">
            <iframe
              title="Introduktionsvideo"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        <DownloadSection />
        <SignupForm />
      </article>
    </div>
  );
}
