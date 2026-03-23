export default function Artists() {
  return (
    <main className="page">
      <section className="artists">
        <header className="artists-header">
          <p className="eyebrow">Artists</p>
        </header>

        <div className="artist-grid">
          <article className="artist-card">
            <div
              className="artist-photo photo-three"
              role="img"
              aria-label="Abstract portrait in neutral tones"
            />
            <div className="artist-info">
              <h2>Gabriel Patås</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </article>

          <article className="artist-card">
            <div
              className="artist-photo photo-two"
              role="img"
              aria-label="Abstract portrait in cool tones"
            />
            <div className="artist-info">
              <h2>Kim Dürbeck</h2>
              <p>
                Kim Durbeck, also known as Kim Thanh Ngo, is a Norwegian-Vietnamese
                DJ and electronic music producer based in Sandefjord. With 20 years
                of experience as a DJ and producer, he can proudly point to having
                composed music for institutions such as the National Theatre, as well
                as for film and advertising, and producing music for the group Liar.
                He has remixed artists such as Ary and Nothing Personal. Kim Dürbeck
                is also one of the founders of Lek REC, a label that releases
                underground music beyond Norway&apos;s borders.
              </p>
            </div>
          </article>

          <article className="artist-card">
            <div
              className="artist-photo photo-one"
              role="img"
              aria-label="Abstract portrait in warm tones"
            />
            <div className="artist-info">
              <h2>Lárus Sigurvin</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
