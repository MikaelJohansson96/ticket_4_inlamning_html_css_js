export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Mikael Webbprojekt</p>
        <p>
          <a href="/cv.pdf" download>Hämta CV (PDF)</a>
        </p>
      </div>
    </footer>
  );
}
