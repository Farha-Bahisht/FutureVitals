import React from "react";
import "./Home.css";
import WhereWeWork from "../Components/WhereWeWork";

const stats = [
  { title: "Cardio Access", copy: "914K lack preventive screening" },
  { title: "Vision Care", copy: "244K need annual exams" },
  { title: "Chronic Dx", copy: "251K require ongoing labs" },
  { title: "Clinic Reach", copy: "116K outside 30-min radius" },
];

const Home = () => {
  return (
    <>
      <main>
        {/* HERO */}
        <section
          className="hero"
          role="img"
          aria-label="FutureVitals: advancing health equity"
        >
          <div className="hero-overlay" />
          <div className="hero-content">{/* optional text on image */}</div>
        </section>

        {/* TAB under hero */}
        <section className="hero-tab-wrap">
          <div className="hero-tab">
            <h2>Whatever you want to say</h2>
            <p>FutureVitals and partners align to support people and ecosystems.</p>
          </div>
        </section>

        {/* STATS LEFT / IMAGE RIGHT */}
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

            <a className="impact-link" href="#learn">
              Learn more →
            </a>
          </div>

          <figure className="impact-media">
            <img
              src="/assets/Stats.jpg"
              alt="Healthcare statistics and impact data"
              style={{
                width: '100%',
                height: 'auto',
                maxWidth: '600px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
              }}
            />
          </figure>

          <section className="page-section">
  <WhereWeWork />
</section>
        </section>
      </main>
    </>
  );
};

export { Home };
