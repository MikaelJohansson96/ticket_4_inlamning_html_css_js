import React, { useState, useRef } from "react";

export default function DownloadSection() {
  const [uploadStatus, setUploadStatus] = useState("");
  const statusRef = useRef(null);

  function handleFileChange(e) {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setUploadStatus(`Filen "${file.name}" mottagen.`);
      statusRef.current?.focus();
    } else {
      setUploadStatus("");
    }
  }

  return (
    <section aria-labelledby="download-heading" className="page">
      <h2 id="download-heading">Filer</h2>

      <div>
        <p>Ladda upp en fil (simulerat):</p>
        <label htmlFor="upload-file" className="visually-hidden">Välj fil att ladda upp</label>
        <input id="upload-file" name="upload" type="file" aria-label="Ladda upp fil" onChange={handleFileChange} />
        <div id="upload-status" role="status" aria-live="polite" tabIndex="-1" ref={statusRef}>
          {uploadStatus && <p className="success">{uploadStatus}</p>}
        </div>
      </div>

      <div style={{ marginTop: 12 }}>
        <p>Ladda ner CV:</p>
        <a href="/cv.pdf" download="Mikael_CV.pdf">Hämta CV (PDF)</a>
      </div>
    </section>
  );
}
