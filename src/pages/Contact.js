import SignupForm from "../components/SignupForm";
import DownloadSection from "../components/DownloadSection";

export default function Contact() {
  return (
    <section className="container">
      <h2>Kontakt</h2>

      <SignupForm />

      <DownloadSection />

      <section aria-labelledby="map-heading">
        <h3 id="map-heading">Hitta mig</h3>
        <div className="map-wrap">
          <iframe
            title="Google Maps"
            src="https://maps.google.com/maps?q=Gävle&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </section>
  );
}

