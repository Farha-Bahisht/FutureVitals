import React, { useState, useEffect } from "react";
import axios from "axios";
import "./GetInvolvedAdmin.css";

export default function GetInvolvedAdmin() {
  const [data, setData] = useState(null);

  // 🧭 Load current data
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/getinvolved")
      .then((res) => setData(res.data))
      .catch((err) => console.error("Failed to load:", err));
  }, []);

  // 🌐 Image upload helper
  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post(
        "http://localhost:4000/api/getinvolved/upload",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      return res.data.url;
    } catch (err) {
      console.error("Image upload failed:", err);
      alert("Image upload failed. Try again.");
      return null;
    }
  };

  const handleBannerChange = (field, value) => {
    setData((prev) => ({
      ...prev,
      banner: { ...prev.banner, [field]: value },
    }));
  };

  const handleSectionChange = (index, field, value) => {
    const updated = [...data.sections];
    updated[index][field] = value;
    setData((prev) => ({ ...prev, sections: updated }));
  };

  const handleAddSection = () => {
    setData((prev) => ({
      ...prev,
      sections: [
        ...prev.sections,
        {
          title: "",
          text: "",
          image: "",
          buttonText: "",
          buttonLink: "",
        },
      ],
    }));
  };

  const handleDeleteSection = (index) => {
    if (!window.confirm("Are you sure you want to delete this section?")) return;
    const updated = [...data.sections];
    updated.splice(index, 1);
    setData((prev) => ({ ...prev, sections: updated }));
  };

  const handleFormChange = (field, value) => {
    setData((prev) => ({
      ...prev,
      formSection: { ...prev.formSection, [field]: value },
    }));
  };

  const handleSave = async () => {
    try {
      await axios.put("http://localhost:4000/api/getinvolved", data);
      alert("Get Involved page updated!");
    } catch (err) {
      console.error(err);
      alert("Failed to save changes.");
    }
  };

  if (!data) return <p>Loading...</p>;

  return (
    <div className="getinvolved-admin">
      <h2>Edit Get Involved Page</h2>

      {/* 🌟 Banner Section */}
      <div className="admin-section">
        <h3>Banner</h3>

        <label>Title:</label>
        <input
          type="text"
          value={data.banner.title || ""}
          onChange={(e) => handleBannerChange("title", e.target.value)}
        />

        <label>Subtitle:</label>
        <input
          type="text"
          value={data.banner.subtitle || ""}
          onChange={(e) => handleBannerChange("subtitle", e.target.value)}
        />

        <label>Banner Image:</label>
        <input
          type="file"
          onChange={async (e) => {
            const file = e.target.files[0];
            if (file) {
              const url = await uploadImage(file);
              if (url) handleBannerChange("image", url);
            }
          }}
        />
        {data.banner.image && (
          <img
            src={data.banner.image}
            alt="Banner Preview"
            className="admin-preview"
          />
        )}
      </div>

      {/* 🧭 Sections */}
      <div className="admin-section">
        <h3>Sections</h3>
        {data.sections.map((section, i) => (
          <div key={i} className="admin-subsection">
            <h4>Section {i + 1}</h4>

            <label>Title:</label>
            <input
              type="text"
              value={section.title}
              onChange={(e) =>
                handleSectionChange(i, "title", e.target.value)
              }
            />

            <label>Text:</label>
            <textarea
              value={section.text}
              onChange={(e) =>
                handleSectionChange(i, "text", e.target.value)
              }
            />

            <label>Image:</label>
            <input
              type="file"
              onChange={async (e) => {
                const file = e.target.files[0];
                if (file) {
                  const url = await uploadImage(file);
                  if (url) handleSectionChange(i, "image", url);
                }
              }}
            />
            {section.image && (
              <img
                src={section.image}
                alt={`Section ${i + 1}`}
                className="admin-preview"
              />
            )}

            <label>Button Text:</label>
            <input
              type="text"
              value={section.buttonText}
              onChange={(e) =>
                handleSectionChange(i, "buttonText", e.target.value)
              }
            />

            <label>Button Link:</label>
            <input
              type="text"
              value={section.buttonLink}
              onChange={(e) =>
                handleSectionChange(i, "buttonLink", e.target.value)
              }
            />

            <button
              type="button"
              className="delete-btn"
              onClick={() => handleDeleteSection(i)}
            >
              🗑️ Delete Section
            </button>
          </div>
        ))}
        <button className="add-btn" onClick={handleAddSection}>
          + Add Section
        </button>
      </div>

      {/* 📌 Form CTA Section */}
      <div className="admin-section">
        <h3>Form Section</h3>

        <label>Title:</label>
        <input
          type="text"
          value={data.formSection.title || ""}
          onChange={(e) => handleFormChange("title", e.target.value)}
        />

        <label>Text:</label>
        <textarea
          value={data.formSection.text || ""}
          onChange={(e) => handleFormChange("text", e.target.value)}
        />

        <label>Button Text:</label>
        <input
          type="text"
          value={data.formSection.buttonText || ""}
          onChange={(e) => handleFormChange("buttonText", e.target.value)}
        />

        <label>Button Link:</label>
        <input
          type="text"
          value={data.formSection.buttonLink || ""}
          onChange={(e) => handleFormChange("buttonLink", e.target.value)}
        />
      </div>

      <button className="save-btn" onClick={handleSave}>
        💾 Save All
      </button>
    </div>
  );
}
