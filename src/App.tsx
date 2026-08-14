import founderPhoto from "./assets/founder.webp";
import "./App.css";
const hvacUrl = "https://hvac-quote-pro.onrender.com";

function App() {
  return (
    <div className="site-shell">
      {/* NAVBAR */}
      <header className="navbar">
        <a href="#top" className="brand">
          <span className="brand-mark">SDA</span>
          <span>
            <strong>SDA Technologies</strong>
            <small>Software • AI • Automation</small>
          </span>
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#solutions">Solutions</a>
          <a href="#technology">Technology</a>
          <a href="#founder">Founder</a>
        </nav>

        <a className="nav-cta" href="#contact">
          Work With Us
        </a>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero section">
          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />

          <div className="eyebrow">
            <span className="status-dot" />
            BUILDING THE FUTURE FROM INDIA
          </div>

          <h1>
            Intelligent software.
            <br />
            <span>Real business impact.</span>
          </h1>

          <p className="hero-copy">
            SDA Technologies builds practical software products, AI-powered
            solutions, and business automation systems that help modern
            companies work smarter, move faster, and operate more efficiently.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#products">
              Explore Our Products <span>→</span>
            </a>
            <a className="button button-secondary" href="#contact">
              Work With Us
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>01</strong>
              <span>Flagship Product</span>
            </div>
            <div>
              <strong>AI</strong>
              <span>Intelligent Workflows</span>
            </div>
            <div>
              <strong>SaaS</strong>
              <span>Software Products</span>
            </div>
            <div>
              <strong>∞</strong>
              <span>Global Vision</span>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section about-section">
          <div className="section-label">01 — ABOUT SDA</div>

          <div className="section-heading">
            <h2>Technology built around real problems.</h2>
            <p>
              We don't build technology simply for the sake of technology. We
              identify real business problems, design useful solutions, and
              continuously improve products around real-world usage.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-card large-card">
              <span className="card-number">01</span>
              <h3>Product First</h3>
              <p>
                We focus on building practical software products that solve
                specific operational problems.
              </p>
            </div>

            <div className="about-card">
              <span className="card-number">02</span>
              <h3>AI & Automation</h3>
              <p>
                Intelligent workflows reduce repetitive work and help
                businesses respond faster.
              </p>
            </div>

            <div className="about-card">
              <span className="card-number">03</span>
              <h3>Global Mindset</h3>
              <p>
                Products are designed with international businesses and
                customers in mind.
              </p>
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section id="products" className="section products-section">
          <div className="section-label">02 — PRODUCTS</div>

          <div className="section-heading">
            <h2>Software designed to move businesses forward.</h2>
            <p>
              Our first flagship product is built around one clear objective:
              turning complex business workflows into simpler operations.
            </p>
          </div>

          <article className="product-feature">
            <div className="product-top">
              <div>
                <div className="product-badge">FLAGSHIP PRODUCT</div>
                <h3>HVAC Quote Pro</h3>
              </div>

              <span className="product-index">01</span>
            </div>

            <p className="product-description">
              An HVAC quoting and business management platform designed to
              help HVAC companies create estimates, manage leads, organize
              quotes, and operate more efficiently.
            </p>

            <div className="feature-grid">
              <div>
                <span>✓</span>
                Instant Estimates
              </div>
              <div>
                <span>✓</span>
                Lead Management
              </div>
              <div>
                <span>✓</span>
                Operations Dashboard
              </div>
              <div>
                <span>✓</span>
                Quote History
              </div>
              <div>
                <span>✓</span>
                Secure Authentication
              </div>
              <div>
                <span>✓</span>
                Business Profiles
              </div>
            </div>

            <a
              className="button button-primary product-button"
              href={hvacUrl}
              target="_blank"
              rel="noreferrer"
            >
              Visit HVAC Quote Pro <span>↗</span>
            </a>
          </article>
        </section>

        {/* SOLUTIONS */}
        <section id="solutions" className="section solutions-section">
          <div className="section-label">03 — WHAT WE BUILD</div>

          <div className="section-heading">
            <h2>Software and automation with a purpose.</h2>
          </div>

          <div className="solutions-grid">
            <div className="solution-card">
              <span>01</span>
              <h3>AI-Powered Software</h3>
              <p>
                Practical intelligent software designed around real business
                workflows and customer needs.
              </p>
            </div>

            <div className="solution-card">
              <span>02</span>
              <h3>SaaS Products</h3>
              <p>
                Scalable software products that help businesses manage
                operations, customers, and growth.
              </p>
            </div>

            <div className="solution-card">
              <span>03</span>
              <h3>Business Automation</h3>
              <p>
                Connected workflows that reduce repetitive work and help teams
                respond faster.
              </p>
            </div>

            <div className="solution-card">
              <span>04</span>
              <h3>Custom Solutions</h3>
              <p>
                Purpose-built technology for businesses with specific
                operational and workflow requirements.
              </p>
            </div>
          </div>
        </section>

        {/* AUTOMATION */}
        <section className="section automation-section">
          <div className="section-label">04 — AUTOMATION</div>

          <div className="automation-content">
            <div>
              <h2>Turn repetitive work into intelligent workflows.</h2>
              <p>
                We connect software, data, AI, and automation to help
                businesses move information through their workflows faster and
                more reliably.
              </p>
            </div>

            <div className="workflow">
              <div className="workflow-step">
                <strong>01</strong>
                <span>Lead</span>
              </div>
              <i>→</i>
              <div className="workflow-step">
                <strong>02</strong>
                <span>Qualification</span>
              </div>
              <i>→</i>
              <div className="workflow-step">
                <strong>03</strong>
                <span>Automation</span>
              </div>
              <i>→</i>
              <div className="workflow-step">
                <strong>04</strong>
                <span>Follow-up</span>
              </div>
              <i>→</i>
              <div className="workflow-step">
                <strong>05</strong>
                <span>Customer</span>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNOLOGY */}
        <section id="technology" className="section technology-section">
          <div className="section-label">05 — TECHNOLOGY</div>

          <div className="section-heading">
            <h2>Modern technology. Practical execution.</h2>
            <p>
              We use modern development infrastructure to build reliable,
              scalable, and maintainable products.
            </p>
          </div>

          <div className="tech-list">
            {[
              "React",
              "TypeScript",
              "Node.js",
              "PostgreSQL",
              "Supabase",
              "n8n",
              "AI",
              "Cloud Infrastructure",
            ].map((technology, index) => (
              <div className="tech-item" key={technology}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{technology}</strong>
              </div>
            ))}
          </div>
        </section>

        {/* FOUNDER */}
        <section id="founder" className="section founder-section">
          <div className="section-label">06 — FOUNDER</div>

          <div className="founder-card">
            <img
  src={founderPhoto}
  alt="Mohammed Abdul Aziz, Founder & CEO of SDA Technologies"
  className="founder-photo"
/>

            <div>
              <span className="founder-role">FOUNDER & CEO</span>
              <h2>Mohammed Abdul Aziz</h2>
              <p>
                Building technology products with a global mindset — focused
                on practical software, intelligent automation, and solutions
                that create measurable business value.
              </p>
            </div>
          </div>
        </section>

        {/* VISION */}
        <section className="vision-section">
          <div className="vision-inner">
            <div className="section-label">07 — GLOBAL VISION</div>
            <h2>From India to the World.</h2>
            <p>
              We believe great technology can be built anywhere. Our goal is to
              create products from India that solve real problems for
              businesses and customers around the world.
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact-section">
          <div className="contact-card">
            <div className="section-label">08 — LET'S BUILD</div>

            <h2>Have a business problem we can solve?</h2>

            <p>
              Tell us what you are trying to build, automate, or improve.
            </p>

            <div className="contact-actions">
              <a
                className="button button-primary"
                href="mailto:smartdealswithaziz@gmail.com"
              >
                Contact SDA Technologies
              </a>

              <a className="button button-secondary" href={hvacUrl}>
                Explore HVAC Quote Pro
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-brand">
          <span className="brand-mark">SDA</span>
          <div>
            <strong>SDA Technologies</strong>
            <p>Software • AI • Automation</p>
          </div>
        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#solutions">Solutions</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-bottom">
          <span>© 2026 SDA Technologies. All rights reserved.</span>
          <span>From India to the World.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;