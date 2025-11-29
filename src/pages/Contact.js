import React from "react";

export default function Contact() {
  return (
    <div className="container">
      <article className="page" aria-labelledby="contact-heading">
        <h1 id="contact-heading">Kontakt</h1>

        <section aria-labelledby="contact-form-heading">
          <h2 id="contact-form-heading">Skicka ett meddelande</h2>
          <form className="form" onSubmit={(e) => { e.preventDefault(); alert("Meddelande skickat (simulerat)"); }}>
            <label htmlFor="contact-name">Namn</label>
            <input id="contact-name" type="text" required />

            <label htmlFor="contact-email">E-post</label>
            <input id="contact-email" type="email" required />

            <label htmlFor="contact-message">Meddelande</label>
            <textarea id="contact-message" rows="5" />

            <button type="submit">Skicka</button>
          </form>
        </section>

        <section aria-labelledby="map-heading">
          <h2 id="map-heading">Hitta mig</h2>
          <p>Inbäddad karta (byt src till din plats eller använd Google Maps API om du vill).</p>

          <div className="media-wrap" aria-hidden="false">
            <iframe
              title="Karta"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2130.1234567890123!2d17.123456!3d60.674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjDCsDM5JzUuMCJOIDE3wrAwNSc0MC4wIlc!5e0!3m2!1ssv!2sse!4v0000000000000"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </article>
    </div>
  );
}

