import React from "react";
import "./Home.css";
import heroImg from "/Users/farhabahisht/FutureVitals/src/assets2/homebanner.png"; // ✅ your hero image
import whoWeAreImg from "/Users/farhabahisht/FutureVitals/src/assets2/whoweare.png"; // ✅ illustration or relevant image
import healthImg from "/Users/farhabahisht/FutureVitals/src/assets2/health.jpg";
import mentalImg from "/Users/farhabahisht/FutureVitals/src/assets2/mental.png";
import educationImg from "/Users/farhabahisht/FutureVitals/src/assets2/education.png";
import WhereWeWork from "/Users/farhabahisht/FutureVitals/src/Components/WhereWeWork.jsx"; // ✅ make sure this path matches your project
import NewsletterForm from "/Users/farhabahisht/FutureVitals/src/Components/NewsletterForm.jsx"; // ✅ adjust path

// ✅ Example stats array (if not already imported)
const stats = [
  { title: "50+", copy: "Communities served" },
  { title: "10k+", copy: "People impacted" },
  { title: "25+", copy: "Partnerships established" },
  { title: "25+", copy: "Partnerships established" },
];

export default function Home() {
  return (
    <div className="home-page">

      {/* ✅ HERO IMAGE */}
      <div
        className="home-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-overlay">
          <h1>Your Hero Title</h1>
          <p>Your subtitle or mission statement goes here</p>
        </div>
      </div>

      {/* ✅ WHO WE ARE SECTION */}
<section className="who-we-are-section">
  <div className="who-we-are-box">
    <div className="who-text">
      <h2>Who We Are</h2>
      <p>
        Future Vitals was created by a team of passionate student leaders, determined to make a 
        difference in communities by positively impacting health, education, and well-being.
        <br /><br />
        We believe in empowering youth, promoting health equity, and driving global impact through
        innovative projects and meaningful collaborations.
      </p>
    </div>
  </div>

  <div className="who-image">
    <img src={whoWeAreImg} alt="Who We Are" />
  </div>
</section>


      {/* ✅ WHAT WE DO SECTION */}
      <section className="what-we-do">
        <h2>What We Do</h2>
        <p className="subtitle">Engage, Empower, Elevate</p>
        <div className="what-grid">

          <div className="what-card">
            <img src={healthImg} alt="Health" />
            <div className="what-card-text brown">
              <h3>ADDRESS HEALTH DISPARITIES</h3>
              <p>
                A health disparity is any “health difference” linked with social or environmental disadvantage. 
                
              </p>
            </div>
          </div>

          <div className="what-card">
            <img src={mentalImg} alt="Mental Health" />
            <div className="what-card-text peach">
              <h3>PROMOTE MENTAL HEALTH</h3>
              <p>
                We work to educate communities about taboo subjects and support mental health stability.
              </p>
            </div>
          </div>

          <div className="what-card">
            <img src={educationImg} alt="Education" />
            <div className="what-card-text light-peach">
              <h3>ADVANCE GIRLS EDUCATION</h3>
              <p>
                Education is a right for all women. We increase access to education and workforce opportunities globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ STATS / CHALLENGE */}
      <section className="impact">
        <div className="impact-content">
          <h2 className="impact-title">The Challenge</h2>
          <p className="impact-lede">
            <strong className="pill">1 in 5 people</strong> face barriers to
            timely, equitable care. FutureVitals tracks the gaps and moves
            resources where they matter most.
          </p>
          <ul className="impact-stats">
            {stats.map(({ title, copy }) => (
              <li key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </li>
            ))}
          </ul>
          <a className="impact-link" href= "https://docs.google.com/forms/d/e/1FAIpQLSf1uojvpb8uofP4a67JQaSmE1nb4xTqz-B-k7Oq0wCYpwtoFQ/viewform?usp=header">
            Learn more →
          </a>
        </div>

        <figure className="impact-media">
          <img
            src="/assets/Stats.jpg"
            alt="Healthcare statistics and impact data"
          />
        </figure>
      </section>

      {/* ✅ WHERE WE WORK */}
      <section className="page-section where-we-work">
        <h2>Where We Work</h2>
        <div className="map-wrap">
          <WhereWeWork />
        </div>
      </section>

      {/* ✅ NEWSLETTER */}
      <section className="page-section">
        <h2>Stay Updated</h2>
        <p>Sign up for our newsletter to receive updates and news.</p>
        <NewsletterForm />
      </section>

      <section className="newsletter-section">
      <div className="newsletter-blob">
        <h2 className="newsletter-title">Read Our Newsletter!</h2>
        <p className="newsletter-text">
          tay connected with FutureVitals by signing up for our newsletter. Be the first to hear about 
          our latest projects, events, and programs.
            Don’t miss out—join our community today and stay informed!
        </p>
        <a href="#" className="newsletter-btn">
          View Here!
        </a>
      </div>
    </section>

    </div>
  );
}
