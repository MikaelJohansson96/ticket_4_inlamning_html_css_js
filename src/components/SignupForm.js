import { useState } from "react";

export default function SignupForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // Simulera lyckad anmälan
    setStatus("Tack! Din anmälan mottagen.");
    // Rensa formulär (valfritt)
    e.target.reset();
  }

  return (
    <section aria-labelledby="signup-heading">
      <h3 id="signup-heading">Anmälan</h3>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Namn
          <input name="name" type="text" required />
        </label>

        <label>
          E-post
          <input name="email" type="email" required />
        </label>

        <button type="submit">Skicka</button>
      </form>

      {status && <p className="success">{status}</p>}
    </section>
  );
}
