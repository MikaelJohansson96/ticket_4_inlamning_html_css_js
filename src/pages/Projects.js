export default function Projects() {
  return (
    <section className="container">
      <h2>Mina projekt</h2>

      <table className="responsive-table" aria-describedby="projects-desc">
        <caption id="projects-desc">Lista över projekt och korta beskrivningar</caption>
        <thead>
          <tr>
            <th>Projekt</th>
            <th>Beskrivning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Portfolio</td>
            <td>Min personliga hemsida med projekt och kontaktinformation.</td>
          </tr>
          <tr>
            <td>Spelrecensioner</td>
            <td>Blogg med recensioner och guider.</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
