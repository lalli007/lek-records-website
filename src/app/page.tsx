export default function Home() {
  return (
    <>
      <main id="timeline">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/vinyl-release.png"
          alt="Vinyl release"
          className="vinyl-hero"
        />
        <a className="order-link" href="/catalogue">Order vinyl / digital here</a>
        <ul className="track-list hero-tracks">
          <li><button className="track-chip" type="button">▶ Kim Dürbeck - Deployer</button></li>
          <li><button className="track-chip" type="button">▶ Woody Mcbride DJ ESP - Shits fucked</button></li>
          <li><button className="track-chip" type="button">▶ Lárus Sigurvin - Orientalism</button></li>
          <li><button className="track-chip" type="button">▶ Patås - Stupid Junky Music</button></li>
        </ul>
      </main>

      <aside className="shipping-inline" hidden>
        <details className="shipping-details">
          <summary>xx lek rec shipping xx</summary>
          <div className="shipping-content">
            <p>—</p>
            <p className="shipping-title">Your cart</p>
            <p>
              Shipping: <em>Please choose destination country.</em>
            </p>
            <p>Total: 0.00 €</p>
            <p>—</p>
            <p className="shipping-title">Your invoice details</p>
            <form className="shipping-form" action="#">
              <label>Email*</label>
              <input type="email" />
              <label>Name*</label>
              <input type="text" />
              <label>Street*</label>
              <input type="text" />
              <label>House number*</label>
              <input type="text" />
              <label>Additional</label>
              <input type="text" />
              <label>Zip code*</label>
              <input type="text" />
              <label>State</label>
              <input type="text" />
              <label>City*</label>
              <input type="text" />
              <label>Telephone*</label>
              <input type="tel" />
              <label>Country*</label>
              <select>
                <option>----</option>
                <option>Norway</option>
                <option>EU</option>
                <option>Worldwide</option>
              </select>
              <label>Shipping*</label>
              <div className="shipping-radio">
                <label>
                  <input type="radio" name="ship" /> Registered
                </label>
                <label>
                  <input type="radio" name="ship" /> Pick up
                </label>
              </div>
              <label>Payment</label>
              <div className="shipping-radio">
                <label>
                  <input type="radio" name="pay" /> Credit card
                </label>
                <label>
                  <input type="radio" name="pay" /> Paypal
                </label>
                <label>
                  <input type="radio" name="pay" /> iDeal
                </label>
              </div>
              <label className="shipping-check">
                <input type="checkbox" />
                Agree to SBT and privacy terms.
              </label>
              <button type="button" className="shipping-submit">
                Place order
              </button>
            </form>
          </div>
        </details>
      </aside>
    </>
  );
}
