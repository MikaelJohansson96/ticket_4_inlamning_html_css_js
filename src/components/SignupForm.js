import { useState } from "react";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !name) {
      setStatus("Vänligen fyll i alla fält.");
      return;
    }
    // Simulera lyckad anmälan
    setStatus("Tack! Din anmälan mottagen.");
    // Rensa kontrollerade fält
    setName("");
    setEmail("");
    // valfritt: ta bort status efter några sekunder
    // setTimeout(() => setStatus(""), 5000);
  }

  return (
    <section aria-labelledby="signup-heading" className="container">
      <h3 id="signup-heading">Anmälan</h3>

      <form onSubmit={handleSubmit} className="form" aria-describedby="signup-status">
        <label htmlFor="signup-name">Namn</label>
        <input
          id="signup-name"
          name="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="signup-email">E-post</label>
        <input
          id="signup-email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Skicka</button>
      </form>

      <div id="signup-status" role="status" aria-live="polite">
        {status && <p className="success">{status}</p>}
      </div>
    </section>
  );
}

