export default function Home() {
  return (
    <main className="container">
      <h1>Välkommen till min webbplats</h1>

      <section>
        <h2>Snabbfakta</h2>
        <ul>
          <li>Favoritspel: Minecraft</li>
          <li>Favoritmusik: Synthwave</li>
          <li>Programmeringsspråk: JavaScript</li>
        </ul>
      </section>

      <section>
        <h2>Presentation</h2>
        <img src="/logo.png" alt="Min logotyp" className="hero-image" />
      </section>

      <section>
        <h2>Demo-video</h2>
        <div className="video-wrap">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Demo video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </main>
  );
}
