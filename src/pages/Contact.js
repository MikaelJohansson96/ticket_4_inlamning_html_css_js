import React from "react";

export default function Contact() {
  return (
    <div className="container">
      <article className="page" aria-labelledby="contact-heading">
        <h1 id="contact-heading">Kontakt</h1>

        <section aria-labelledby="contact-form-heading">
          <h2 id="contact-form-heading">Skicka ett meddelande</h2>
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              // Simulerad sändning
              alert("Meddelande skickat (simulerat)");
            }}
          >
            <label htmlFor="contact-name">Namn</label>
            <input id="contact-name" name="name" type="text" required />

            <label htmlFor="contact-email">E-post</label>
            <input id="contact-email" name="email" type="email" required />

            <label htmlFor="contact-message">Meddelande</label>
            <textarea id="contact-message" name="message" rows="5" />

            <button type="submit">Skicka</button>
          </form>
        </section>

        <section aria-labelledby="map-heading">
          <h2 id="map-heading">Hitta mig</h2>
          <p>Här visas min plats i Gävle. Klicka på länken för att öppna en större karta i Google Maps.</p>

          <div className="media-wrap" role="region" aria-labelledby="map-heading">
            <iframe
              title="Karta över Gävle"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2130.1234567890123!2d17.133!3d60.674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f6b8b00000001%3A0x0000000000000000!2sG%C3%A4vle%2C%20Sweden!5e0!3m2!1ssv!2sse!4v0000000000000"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <p style={{ marginTop: 12 }}>
            <a
              href="https://www.google.com/maps/search/?api=1&query=60.674,17.133"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visa en större karta
            </a>
          </p>
        </section>
      </article>
    </div>
  );
}

