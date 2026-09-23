export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="container">
      <header className="hero">
        <h1>Lucas Utley</h1>
        <p className="tagline">A senior at UH Manoa studying music.</p>
      </header>

      <main>
        <section aria-labelledby="about-heading">
          <h2 id="about-heading">About</h2>
          <p>
            I&apos;m a senior at the University of Hawai&#699;i at M&#257;noa,
            where I study music. I enjoy learning how music is made, practiced
            and shared, and I&apos;m using my final year to keep growing as a
            musician.
          </p>
        </section>

        <section aria-labelledby="semester-heading">
          <h2 id="semester-heading">This semester</h2>
          <ul>
            <li>Taking an upper-level music theory course.</li>
            <li>Preparing for an end-of-semester performance.</li>
            <li>Building a consistent daily practice routine.</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {year} Lucas Utley</p>
      </footer>
    </div>
  );
}
