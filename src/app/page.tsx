import LogoCanvas from "@/components/LogoCanvas";

export default function Home() {
  return (
    <>
      <main id="timeline">
        <div className="logo-wrap">
          <LogoCanvas />
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/LEKREC.svg" alt="LEKREC logo" className="logo" />
          </noscript>
        </div>
        <a
          className="text-us"
          href="https://wa.me/4795444766"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </main>

      <aside className="shipping-inline">
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
