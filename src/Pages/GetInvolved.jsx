import React, { useState, useEffect } from "react";
import axios from "axios";
import "./GetInvolved.css";

export default function GetInvolved() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://futurevitals1-1.onrender.com/api/getinvolved")
      .then((res) => setData(res.data))
      .catch((err) => console.error("Failed to load Get Involved:", err));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="getinvolved">
      {/* 🌟 Banner Section */}
      {data.banner?.image && (
        <div className="getinvolved-banner">
          <img src={data.banner.image} alt="Get Involved Banner" />
          <div className="banner-overlay">
            <h1>{data.banner.title || "Get Involved"}</h1>
            <p>{data.banner.subtitle || "You Can Make a Difference"}</p>
          </div>
        </div>
      )}

      {/* 🧭 Cards Grid */}
      <div className="getinvolved-grid">
        {data.sections.map((section, index) => (
          <div key={index} className="getinvolved-card">
            {section.image && <img src={section.image} alt={section.title} />}
            <div className="getinvolved-card-content">
              <h3>{section.title}</h3>
              <p>{section.text}</p>
              {section.buttonText && section.buttonLink && (
                <a
                  href={section.buttonLink}
                  target="_blank"
                  rel="noreferrer"
                  className="getinvolved-btn"
                >
                  {section.buttonText}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 📌 CTA Section */}
      {data.formSection && (
        <div className="form-section">
          <h3>{data.formSection.title}</h3>
          <p>{data.formSection.text}</p>
          {data.formSection.buttonLink && (
            <a
              href={data.formSection.buttonLink}
              target="_blank"
              rel="noreferrer"
              className="getinvolved-btn"
            >
              {data.formSection.buttonText || "Open Form"}
            </a>
          )}
        </div>
      )}
    </div>
  );
}
