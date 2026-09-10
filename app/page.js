"use client";

import { useState } from "react";
import "./page.css";

const campaigns = [
  {
    category: "Clean Water",
    title: "Help Build a Well",
    description:
      "Help bring reliable access to clean water to communities that need it most.",
    raised: 18450,
    goal: 25000,
    image:
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Community",
    title: "Build a Place of Worship",
    description:
      "Support communities working to build spaces for prayer, learning and gathering.",
    raised: 31200,
    goal: 50000,
    image:
      "https://images.unsplash.com/photo-1540567736792-f78f6242e4e0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Ramadan",
    title: "Ramadan Food Support",
    description:
      "Help provide nourishing meals and essential support to families during Ramadan.",
    raised: 12850,
    goal: 20000,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
  },
];

const impact = [
  {
    number: "24",
    label: "Communities supported",
  },
  {
    number: "18",
    label: "Water projects",
  },
  {
    number: "37K+",
    label: "Meals supported",
  },
  {
    number: "12",
    label: "Community projects",
  },
];

export default function Home() {
  const [amount, setAmount] = useState(50);
  const [frequency, setFrequency] = useState("one-time");

  const donationAmounts = [10, 25, 50, 100];

  const handleDonate = () => {
    alert(
      `Donation selected: $${amount} (${frequency === "monthly" ? "Monthly" : "One-time"})`,
    );
  };

  return (
    <main>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <div className="logo-mark">S</div>

            <div>
              <strong>Somero</strong>
              <span>Charity Organization</span>
            </div>
          </div>

          <div className="nav-links">
            <a href="#causes">Our Work</a>
            <a href="#impact">Our Impact</a>
            <a href="#about">About</a>
            <a href="#stories">Stories</a>
          </div>

          <button className="nav-donate" onClick={handleDonate}>
            Donate Now
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay" />

        <div className="hero-container">
          <div className="hero-content">
            <span className="eyebrow">SOMERO CHARITY ORGANIZATION</span>

            <h1>
              Give with purpose.
              <br />
              <span>Build lasting change.</span>
            </h1>

            <p>
              Together, we can provide clean water, food, places of worship and
              meaningful support to communities that need it most.
            </p>

            <div className="hero-actions">
              <button className="primary-button" onClick={handleDonate}>
                Give Now
                <span>→</span>
              </button>

              <a href="#impact" className="secondary-button">
                See Our Impact
              </a>
            </div>

            <div className="hero-trust">
              <div className="avatars">
                <div>A</div>
                <div>Y</div>
                <div>M</div>
                <div>+</div>
              </div>

              <span>Join people giving toward a better tomorrow.</span>
            </div>
          </div>

          {/* HERO DONATION CARD */}
          <div className="donation-card">
            <div className="donation-card-top">
              <span>MAKE A DIFFERENCE</span>

              <div className="heart">♡</div>
            </div>

            <h2>Choose your gift</h2>

            <div className="amount-grid">
              {donationAmounts.map((value) => (
                <button
                  key={value}
                  className={amount === value ? "active" : ""}
                  onClick={() => setAmount(value)}
                >
                  ${value}
                </button>
              ))}
            </div>

            <div className="custom-amount">
              <span>$</span>

              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="1"
              />
            </div>

            <div className="frequency">
              <button
                className={frequency === "one-time" ? "selected" : ""}
                onClick={() => setFrequency("one-time")}
              >
                One-time
              </button>

              <button
                className={frequency === "monthly" ? "selected" : ""}
                onClick={() => setFrequency("monthly")}
              >
                Monthly
              </button>
            </div>

            <p className="donation-note">
              Every gift helps move a real project forward.
            </p>

            <button className="donate-card-button" onClick={handleDonate}>
              Give ${amount}
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="stats-section" id="impact">
        <div className="stats-container">
          {impact.map((item) => (
            <div className="stat" key={item.label}>
              <strong>{item.number}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="intro-section">
        <div className="section-label">WHY WE GIVE</div>

        <h2>
          Small acts of generosity can create
          <span> lasting change.</span>
        </h2>

        <p>
          Somero Charity Organization exists to turn generosity into meaningful
          action. From clean water and food support to mosques and community
          projects, we work to help people build healthier, stronger and more
          hopeful futures.
        </p>
      </section>

      {/* CAUSES */}
      <section className="causes-section" id="causes">
        <div className="section-heading">
          <div>
            <span className="section-label">OUR WORK</span>

            <h2>Where your generosity goes</h2>
          </div>

          <p>Support the causes that matter most to you.</p>
        </div>

        <div className="cause-grid">
          <CauseCard
            icon="💧"
            title="Clean Water"
            text="Help communities gain access to clean and reliable water."
          />

          <CauseCard
            icon="🕌"
            title="Mosques & Community"
            text="Support spaces for worship, learning and community."
          />

          <CauseCard
            icon="🍚"
            title="Food Support"
            text="Help families access nourishing food when they need it."
          />

          <CauseCard
            icon="🌙"
            title="Ramadan Giving"
            text="Support families and communities during the blessed month."
          />

          <CauseCard
            icon="❤️"
            title="Emergency Support"
            text="Help provide essential support when unexpected hardship strikes."
          />

          <CauseCard
            icon="🌱"
            title="Long-Term Impact"
            text="Support projects designed to benefit communities for years to come."
          />
        </div>
      </section>

      {/* FEATURED CAMPAIGN */}
      <section className="featured-section">
        <div className="featured-image">
          <img src={campaigns[0].image} alt="Clean water project" />

          <div className="image-badge">
            <span>FEATURED PROJECT</span>
            <strong>Clean Water</strong>
          </div>
        </div>

        <div className="featured-content">
          <span className="section-label">MAKE AN IMPACT</span>

          <h2>Help build a well that can serve a community.</h2>

          <p>
            Access to clean water can transform everyday life. Help us bring
            reliable water closer to families and communities who need it.
          </p>

          <div className="campaign-progress">
            <div className="progress-header">
              <strong>$18,450 raised</strong>
              <span>of $25,000</span>
            </div>

            <div className="progress-bar">
              <div style={{ width: "74%" }} />
            </div>

            <div className="progress-footer">
              <span>74% funded</span>
              <span>127 supporters</span>
            </div>
          </div>

          <button className="primary-button" onClick={handleDonate}>
            Support This Project
            <span>→</span>
          </button>
        </div>
      </section>

      {/* CAMPAIGNS */}
      <section className="campaigns-section">
        <div className="section-heading">
          <div>
            <span className="section-label">CURRENT CAMPAIGNS</span>
            <h2>Projects you can support</h2>
          </div>

          <a href="#causes">View all campaigns →</a>
        </div>

        <div className="campaign-grid">
          {campaigns.map((campaign) => (
            <CampaignCard
              key={campaign.title}
              campaign={campaign}
              onDonate={handleDonate}
            />
          ))}
        </div>
      </section>

      {/* IMPACT STORY */}
      <section className="story-section" id="stories">
        <div className="story-image">
          <img
            src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1400&q=80"
            alt="Community"
          />
        </div>

        <div className="story-content">
          <span className="section-label">THE HUMAN SIDE OF GIVING</span>

          <h2>Behind every project is a human story.</h2>

          <p>
            A well is more than a structure. A meal is more than food. A mosque
            is more than a building.
          </p>

          <p>
            Each project represents people, families and communities working
            toward a better future.
          </p>

          <a href="#impact" className="text-link">
            Discover our impact →
          </a>
        </div>
      </section>

      {/* RAMADAN */}
      <section className="ramadan-section">
        <div className="ramadan-content">
          <span className="section-label">RAMADAN GIVING</span>

          <h2>
            This Ramadan,
            <br />
            <span>let generosity reach further.</span>
          </h2>

          <p>
            Join us in supporting families and communities with food, water and
            essential assistance during Ramadan.
          </p>

          <button className="light-button" onClick={handleDonate}>
            Give During Ramadan
            <span>→</span>
          </button>
        </div>

        <div className="ramadan-stat">
          <span>RAMADAN CAMPAIGN</span>

          <strong>$42,800</strong>

          <p>raised toward a $60,000 goal</p>

          <div className="progress-bar light">
            <div style={{ width: "71%" }} />
          </div>

          <span>71% funded</span>
        </div>
      </section>

      {/* MISSION */}
      <section className="mission-section" id="about">
        <div className="mission-container">
          <span className="section-label">OUR MISSION</span>

          <h2>
            Building a culture of
            <span> compassion, dignity and action.</span>
          </h2>

          <p>
            We believe charity is more than giving money. It is about standing
            beside people, responding to real needs and creating projects that
            continue to benefit communities long after the first donation.
          </p>

          <div className="mission-points">
            <div>
              <span>01</span>
              <strong>Listen</strong>
              <p>Understand what communities actually need.</p>
            </div>

            <div>
              <span>02</span>
              <strong>Build</strong>
              <p>Turn generosity into practical projects.</p>
            </div>

            <div>
              <span>03</span>
              <strong>Impact</strong>
              <p>Share progress and show where support goes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="trust-section">
        <div className="trust-heading">
          <span className="section-label">GIVE WITH CONFIDENCE</span>

          <h2>Your trust matters.</h2>

          <p>
            We believe supporters deserve to understand the work their
            generosity makes possible.
          </p>
        </div>

        <div className="trust-grid">
          <TrustItem
            icon="✓"
            title="Project Updates"
            text="Keep supporters informed about the work they help make possible."
          />

          <TrustItem
            icon="↗"
            title="Visible Impact"
            text="Show progress through stories, photos and project updates."
          />

          <TrustItem
            icon="◉"
            title="Secure Giving"
            text="Provide a simple and secure experience for supporters."
          />

          <TrustItem
            icon="♡"
            title="Community First"
            text="Put dignity, compassion and real community needs at the center."
          />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div>
          <span className="section-label">YOUR GIFT CAN HELP</span>

          <h2>
            Let's build something
            <br />
            <span>that lasts.</span>
          </h2>

          <p>
            One donation can become food on a table, water for a family or a
            project that serves an entire community.
          </p>

          <button className="primary-button" onClick={handleDonate}>
            Give Now
            <span>→</span>
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-mark">S</div>

              <div>
                <strong>Somero</strong>
                <span>Charity Organization</span>
              </div>
            </div>

            <p>Giving with purpose. Building lasting change.</p>
          </div>

          <div className="footer-links">
            <div>
              <strong>Explore</strong>
              <a href="#causes">Our Work</a>
              <a href="#impact">Our Impact</a>
              <a href="#stories">Stories</a>
            </div>

            <div>
              <strong>Get Involved</strong>
              <a href="#donate">Donate</a>
              <a href="#causes">Campaigns</a>
              <a href="#about">About Us</a>
            </div>

            <div>
              <strong>Connect</strong>
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">Contact Us</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Somero Charity Organization</span>
          <span>Made for impact.</span>
        </div>
      </footer>
    </main>
  );
}

function CauseCard({ icon, title, text }) {
  return (
    <div className="cause-card">
      <div className="cause-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{text}</p>

      <a href="#campaigns">
        Explore <span>→</span>
      </a>
    </div>
  );
}

function CampaignCard({ campaign, onDonate }) {
  const percentage = Math.round((campaign.raised / campaign.goal) * 100);

  return (
    <article className="campaign-card">
      <div className="campaign-image">
        <img src={campaign.image} alt={campaign.title} />

        <span>{campaign.category}</span>
      </div>

      <div className="campaign-body">
        <h3>{campaign.title}</h3>

        <p>{campaign.description}</p>

        <div className="campaign-money">
          <strong>${campaign.raised.toLocaleString()}</strong>

          <span>of ${campaign.goal.toLocaleString()}</span>
        </div>

        <div className="small-progress">
          <div style={{ width: `${percentage}%` }} />
        </div>

        <div className="campaign-bottom">
          <span>{percentage}% funded</span>

          <button onClick={onDonate}>Donate →</button>
        </div>
      </div>
    </article>
  );
}

function TrustItem({ icon, title, text }) {
  return (
    <div className="trust-item">
      <div className="trust-icon">{icon}</div>

      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
