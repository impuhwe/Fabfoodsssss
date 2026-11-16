import { useEffect, useState } from "react"

type Route = "home" | "menu" | "about" | "visit"

const photos = {
  hero: "https://images.unsplash.com/photo-1547240089-566513e12c89?auto=format&fit=crop&w=1800&q=88",
  interior:
    "https://images.unsplash.com/photo-1645677020082-721a854c24f2?auto=format&fit=crop&w=1800&q=88",
  seats:
    "https://images.unsplash.com/photo-1621343607959-5d11ff0f1e39?auto=format&fit=crop&w=1600&q=85",
  pour: "https://images.unsplash.com/photo-1713919956905-918a8d14bf4a?auto=format&fit=crop&w=1200&q=85",
}

const navItems: { label: string route: Route }[] = [
  { label: "Home", route: "home" },
  { label: "Menu", route: "menu" },
  { label: "Our story", route: "about" },
  { label: "Visit", route: "visit" },
]

const menu = {
  Coffee: [
    ["Espresso", "A bright, balanced double shot", "3,000"],
    ["Cappuccino", "Espresso, steamed milk, silky foam", "4,000"],
    ["Kacyiru latte", "House espresso, milk, wild honey", "4,500"],
    ["Cold brew", "Slow-steeped for eighteen hours", "4,000"],
  ],
  Breakfast: [
    ["House breakfast", "Eggs, avocado, grilled tomato, toast", "8,000"],
    ["Granola bowl", "Local yoghurt, seasonal fruit, honey", "6,500"],
    ["Croissant sandwich", "Egg, gouda, greens, chilli jam", "7,500"],
    ["French toast", "Banana, cinnamon, roasted cashews", "7,000"],
  ],
  Kitchen: [
    ["Nyama choma", "Char-grilled goat, potatoes, kachumbari", "18,000"],
    ["Whole tilapia", "Lemon, chilli, garden leaves", "20,000"],
    ["Garden pizza", "Tomato, seasonal vegetables, gouda", "9,000"],
    ["Fab burger", "Beef, caramelised onion, fries", "8,500"],
  ],
}

function Arrow() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <path d="M5 12h14M14 7l5 5-5 5" />
    </svg>
  )
}

function navigate(route: Route) {
  window.location.hash = route === "home" ? "/" : `/${route}`
}

function Header({ route }: { route: Route }) {
  const [open, setOpen] = useState(false)
  const go = (next: Route) => {
    setOpen(false)
    navigate(next)
  }
  return (
    <header className="site-header">
      <button className="wordmark" onClick={() => go("home")} type="button">
        <span>Fab</span>
        <span className="wordmark-dot" />
        <small>Kigali coffee house</small>
      </button>
      <nav className={open ? "nav-open" : ""} aria-label="Main navigation">
        {navItems.map((item) => (
          <button
            className={route === item.route ? "active" : ""}
            key={item.route}
            onClick={() => go(item.route)}
            type="button"
          >
            {item.label}
          </button>
        ))}
        <button
          className="mobile-book"
          onClick={() => go("visit")}
          type="button"
        >
          Book a table
        </button>
      </nav>
      <button className="book-link" onClick={() => go("visit")} type="button">
        Book a table <Arrow />
      </button>
      <button
        aria-expanded={open}
        aria-label="Toggle navigation"
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        type="button"
      >
        <span />
        <span />
      </button>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <div className="footer-mark">
        Fab<span>.</span>
      </div>
      <p>Food for the body. Fuel for the brain.</p>
      <div className="footer-meta">
        <span>44 KG 548 St, Kacyiru</span>
        <span>© {new Date().getFullYear()} Fab Kigali</span>
      </div>
    </footer>
  )
}

function PageLink({
  children,
  to,
  light = false,
}: {
  children: React.ReactNode
  to: Route
  light?: boolean
}) {
  return (
    <button
      className={`text-link ${light ? "light" : ""}`}
      onClick={() => navigate(to)}
      type="button"
    >
      {children} <Arrow />
    </button>
  )
}

function HomePage() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Kacyiru · Kigali</p>
            <h1>
              Coffee, food,
              <br />
              <em>and good ideas.</em>
            </h1>
            <p className="hero-intro">
              A neighbourhood coffee house for slow mornings, long lunches, and
              conversations worth staying for.
            </p>
            <div className="hero-actions">
              <button
                className="primary-btn"
                onClick={() => navigate("menu")}
                type="button"
              >
                Explore our menu <Arrow />
              </button>
              <button
                className="quiet-btn"
                onClick={() => navigate("visit")}
                type="button"
              >
                Find us
              </button>
            </div>
          </div>
          <figure className="hero-image">
            <img
              src={photos.hero}
              alt="Coffee being finished with fresh cream"
            />
            <figcaption>
              <span>01</span>
              <p>
                Thoughtfully sourced.
                <br />
                Made to linger over.
              </p>
            </figcaption>
          </figure>
          <div className="vertical-note">Open Monday — Saturday</div>
        </section>

        <section className="home-intro">
          <p className="section-label">The Fab way</p>
          <h2>
            Simple things,
            <br />
            <em>done beautifully.</em>
          </h2>
          <div className="intro-copy">
            <p>
              We brew Rwandan coffee with care and cook generous food from
              bright, local ingredients. Nothing fussy. Always memorable.
            </p>
            <PageLink to="about">Our philosophy</PageLink>
          </div>
        </section>

        <section className="feature-band">
          <img src={photos.interior} alt="Warm, minimal coffee shop bar" />
          <div className="feature-copy">
            <p className="section-label">A seat is waiting</p>
            <h2>
              Made for
              <br />
              <em>your rhythm.</em>
            </h2>
            <p>
              Come for the first espresso of the day, settle in with your
              laptop, or gather your people around the table.
            </p>
            <PageLink to="visit" light>
              Plan your visit
            </PageLink>
          </div>
        </section>

        <section className="tastes">
          <div>
            <p className="section-label">From the kitchen</p>
            <h2>
              Familiar flavours.
              <br />
              <em>A fresh point of view.</em>
            </h2>
          </div>
          <div className="taste-list">
            {[
              "Rwandan coffee",
              "Breakfast all day",
              "Fire & grill",
              "Fresh bakes",
            ].map((item, index) => (
              <button key={item} onClick={() => navigate("menu")} type="button">
                <span>0{index + 1}</span>
                {item}
                <Arrow />
              </button>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function MenuPage() {
  const [category, setCategory] = useState<keyof typeof menu>("Coffee")
  return (
    <>
      <main className="inner-page">
        <section className="page-title">
          <p className="eyebrow">Eat & drink</p>
          <h1>
            Our <em>menu.</em>
          </h1>
          <p>A short menu, guided by the season and made fresh in Kacyiru.</p>
        </section>
        <section className="menu-layout">
          <div
            className="menu-tabs"
            role="tablist"
            aria-label="Menu categories"
          >
            {(Object.keys(menu) as keyof typeof menu[]).map((key, index) => (
              <button
                aria-selected={category === key}
                className={category === key ? "active" : ""}
                key={key}
                onClick={() => setCategory(key)}
                role="tab"
                type="button"
              >
                <span>0{index + 1}</span>
                {key}
              </button>
            ))}
          </div>
          <div className="menu-content" role="tabpanel">
            <div className="menu-heading">
              <h2>{category}</h2>
              <span>Prices in RWF</span>
            </div>
            {menu[category].map(([name, description, price]) => (
              <article className="menu-item" key={name}>
                <div>
                  <h3>{name}</h3>
                  <p>{description}</p>
                </div>
                <strong>{price}</strong>
              </article>
            ))}
            <p className="menu-note">
              Please ask our team about vegetarian options and allergens.
            </p>
          </div>
          <figure className="menu-photo">
            <img
              src={photos.pour}
              alt="Barista pouring a fresh cup of coffee"
            />
            <figcaption>Every cup, made to order.</figcaption>
          </figure>
        </section>
      </main>
      <Footer />
    </>
  )
}

function AboutPage() {
  return (
    <>
      <main className="inner-page">
        <section className="page-title split-title">
          <div>
            <p className="eyebrow">Our story</p>
            <h1>
              Built for
              <br />
              <em>curious minds.</em>
            </h1>
          </div>
          <p>
            Fab began inside FabLab Rwanda with one simple belief: the people
            building tomorrow deserve a beautiful place to pause today.
          </p>
        </section>
        <section className="story-grid">
          <figure className="story-main">
            <img
              src={photos.seats}
              alt="Sunlit seating inside a minimal coffee shop"
            />
          </figure>
          <div className="story-copy">
            <span className="large-number">01</span>
            <h2>
              A café with
              <br />
              <em>maker energy.</em>
            </h2>
            <p>
              We live among designers, engineers, dreamers, and neighbours. It
              makes Fab feel less like a restaurant and more like Kigali’s
              shared kitchen table.
            </p>
            <p>
              Our food is generous, our coffee is proudly Rwandan, and our
              welcome is easy. Whether you stay ten minutes or an entire
              afternoon, you belong here.
            </p>
          </div>
        </section>
        <section className="values">
          {[
            [
              "01",
              "Local first",
              "Coffee and ingredients chosen close to home.",
            ],
            [
              "02",
              "Made with care",
              "No shortcuts, from first prep to final pour.",
            ],
            [
              "03",
              "Open to all",
              "A relaxed table for work, play, and connection.",
            ],
          ].map(([number, title, text]) => (
            <article key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  )
}

function VisitPage() {
  const [sent, setSent] = useState(false)
  return (
    <>
      <main className="inner-page visit-page">
        <section className="visit-grid">
          <div className="visit-details">
            <p className="eyebrow">Come say hello</p>
            <h1>
              Your table
              <br />
              <em>is waiting.</em>
            </h1>
            <p className="visit-lede">
              Find us inside FabLab Rwanda in the heart of Kacyiru. Walk in, or
              leave a note and we’ll make room.
            </p>
            <div className="detail-row">
              <span>Address</span>
              <p>
                44 KG 548 St
                <br />
                Kacyiru, Kigali
              </p>
            </div>
            <div className="detail-row">
              <span>Hours</span>
              <p>
                Mon — Fri: 8:00 — 21:30
                <br />
                Saturday: 9:00 — 21:30
                <br />
                Sunday: Closed
              </p>
            </div>
            <div className="detail-row">
              <span>Contact</span>
              <p>
                +250 780 691 569
                <br />
                hello@fabcafe.rw
              </p>
            </div>
          </div>
          <form
            className="booking-form"
            onSubmit={(event) => {
              event.preventDefault()
              setSent(true)
            }}
          >
            {sent ? (
              <div className="form-success" role="status">
                <span>Thank you</span>
                <h2>We’ve saved your request.</h2>
                <p>Our team will be in touch shortly to confirm your table.</p>
                <button
                  className="primary-btn"
                  onClick={() => setSent(false)}
                  type="button"
                >
                  Make another request
                </button>
              </div>
            ) : (
              <>
                <div className="form-head">
                  <span>Reservations</span>
                  <p>For groups of 2—10</p>
                </div>
                <label>
                  Name
                  <input name="name" placeholder="Your name" required />
                </label>
                <div className="field-pair">
                  <label>
                    Date
                    <input name="date" type="date" required />
                  </label>
                  <label>
                    Guests
                    <select name="guests" defaultValue="2">
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6+</option>
                    </select>
                  </label>
                </div>
                <label>
                  Phone or email
                  <input
                    name="contact"
                    placeholder="How can we reach you?"
                    required
                  />
                </label>
                <label>
                  Anything we should know?
                  <textarea
                    name="note"
                    placeholder="Celebration, allergies, preferred time..."
                    rows={3}
                  />
                </label>
                <button className="primary-btn" type="submit">
                  Request a table <Arrow />
                </button>
              </>
            )}
          </form>
        </section>
      </main>
      <Footer />
    </>
  )
}

function getRoute(): Route {
  const route = window.location.hash.replace(/^#\/?/, "")
  return (["menu", "about", "visit"].includes(route) ? route : "home") as Route
}

export default function App() {
  const [route, setRoute] = useState<Route>(getRoute)
  useEffect(() => {
    const onRouteChange = () => {
      setRoute(getRoute())
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
    window.addEventListener("hashchange", onRouteChange)
    return () => window.removeEventListener("hashchange", onRouteChange)
  }, [])
  const pages: Record<Route, React.ReactNode> = {
    home: <HomePage />,
    menu: <MenuPage />,
    about: <AboutPage />,
    visit: <VisitPage />,
  }
  return (
    <div className="app">
      <Header route={route} />
      <div className="page-transition" key={route}>
        {pages[route]}
      </div>
    </div>
  )
}
