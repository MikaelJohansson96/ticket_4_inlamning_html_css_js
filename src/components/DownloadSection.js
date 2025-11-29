export default function DownloadSection() {
  return (
    <section aria-labelledby="download-heading">
      <h3 id="download-heading">Filer</h3>

      <div>
        <p>Ladda upp en fil (simulerat):</p>
        <input type="file" aria-label="Ladda upp fil" />
      </div>

      <div>
        <p>Ladda ner CV:</p>
        <a href="/cv.pdf" download>Hämta CV (PDF)</a>
      </div>
    </section>
  );
}
