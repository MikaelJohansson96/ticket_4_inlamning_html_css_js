import React, { useState, useRef } from "react";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const statusRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setStatus("Vänligen fyll i alla fält.");
      statusRef.current?.focus();
      return;
    }
    setStatus(`Tack ${name}! Din anmälan mottagen.`);
    setName("");
    setEmail("");
    statusRef.current?.focus();
  }

  return (
    <section aria-labelledby="signup-heading" className="page">
      <h2 id="signup-heading">Anmälan</h2>

      <form onSubmit={handleSubmit} className="form" aria-describedby="signup-status">
        <label htmlFor="signup-name">Namn</label>
        <input id="signup-name" name="name" type="text" required value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="signup-email">E-post</label>
        <input id="signup-email" name="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />

        <button type="submit">Skicka</button>
      </form>

      <div id="signup-status" role="status" aria-live="polite" tabIndex="-1" ref={statusRef}>
        {status && <p className="success">{status}</p>}
      </div>
    </section>
  );
}


