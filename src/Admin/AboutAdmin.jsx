import { useState, useEffect } from "react";
import axios from "axios";
import "./AboutAdmin.css";

export default function AboutAdmin() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:4000/api/aboutus").then((res) => {
      setAbout(res.data);
    });
  }, []);

  if (!about) return <p>Loading...</p>;

  // ✅ Upload image to backend
  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post(
        "http://localhost:4000/api/aboutus/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      return res.data.url;
    } catch (err) {
      console.error("Image upload failed:", err);
      alert("Image upload failed. Please try again.");
      return null;
    }
  };

  // ✅ Generic change for object sections (whoWeAre, mission, vision)
  const handleChange = (section, field, value) => {
    setAbout((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  };

  // ✅ For array sections (programs, team)
  const handleArrayChange = (section, index, field, value) => {
    const updated = [...about[section]];
    updated[index][field] = value;
    setAbout((prev) => ({ ...prev, [section]: updated }));
  };

  const handleAdd = (section) => {
    const newItem =
      section === "programs"
        ? { title: "", text: "", image: "" }
        : { name: "", role: "", quote: "", image: "" };

    setAbout((prev) => ({
      ...prev,
      [section]: [...prev[section], newItem],
    }));
  };

  const handleDelete = (section, index) => {
    const message =
      section === "programs"
        ? "Are you sure you want to delete this program?"
        : "Are you sure you want to delete this team member?";

    if (!window.confirm(message)) return;

    const updated = [...about[section]];
    updated.splice(index, 1);
    setAbout((prev) => ({ ...prev, [section]: updated }));
  };

  const handleSave = async () => {
    try {
      await axios.put("http://localhost:4000/api/aboutus", about);
      alert("About page updated!");
    } catch (err) {
      console.error(err);
      alert("Failed to save changes.");
    }
  };

  return (
    <div className="about-admin">
      <h2>Edit About Us Page</h2>

      {/* 🧍 WHO WE ARE */}
      <div className="form-section">
        <h3>Who We Are</h3>
        <label>Title:</label>
        <input
          type="text"
          value={about.whoWeAre?.title || ""}
          onChange={(e) => handleChange("whoWeAre", "title", e.target.value)}
        />

        <label>Text:</label>
        <textarea
          value={about.whoWeAre?.text || ""}
          onChange={(e) => handleChange("whoWeAre", "text", e.target.value)}
        />

        <label>Image:</label>
        <input
          type="file"
          onChange={async (e) => {
            const file = e.target.files[0];
            if (file) {
              const imageUrl = await uploadImage(file);
              if (imageUrl) handleChange("whoWeAre", "image", imageUrl);
            }
          }}
        />
        {about.whoWeAre?.image && (
          <img
            src={about.whoWeAre.image}
            alt="Who We Are Preview"
            style={{ width: "150px", marginTop: "10px", borderRadius: "6px" }}
          />
        )}
      </div>

      {/* 🌟 Mission */}
      <div className="form-section">
        <h3>Mission</h3>
        <label>Title:</label>
        <input
          type="text"
          value={about.mission.title}
          onChange={(e) => handleChange("mission", "title", e.target.value)}
        />

        <label>Content:</label>
        <textarea
          value={about.mission.text}
          onChange={(e) => handleChange("mission", "text", e.target.value)}
        />
      </div>

      {/* 👁️ Vision */}
      <div className="form-section">
        <h3>Vision</h3>
        <label>Title:</label>
        <input
          type="text"
          value={about.vision?.title || ""}
          onChange={(e) => handleChange("vision", "title", e.target.value)}
        />

        <label>Content:</label>
        <textarea
          value={about.vision?.text || ""}
          onChange={(e) => handleChange("vision", "text", e.target.value)}
        />
      </div>

      {/* 📚 Programs */}
      <div className="form-section">
        <h3>Programs (What We Do)</h3>
        {about.programs.map((program, i) => (
          <div key={i} className="form-subsection">
            <h4 className="item-title">Program {i + 1}</h4>

            <label>Title:</label>
            <input
              type="text"
              value={program.title}
              onChange={(e) =>
                handleArrayChange("programs", i, "title", e.target.value)
              }
            />

            <label>Content:</label>
            <textarea
              value={program.text}
              onChange={(e) =>
                handleArrayChange("programs", i, "text", e.target.value)
              }
            />

            <label>Image:</label>
            <input
              type="file"
              onChange={async (e) => {
                const file = e.target.files[0];
                if (file) {
                  const imageUrl = await uploadImage(file);
                  if (imageUrl)
                    handleArrayChange("programs", i, "image", imageUrl);
                }
              }}
            />
            {program.image && (
              <img
                src={program.image}
                alt={`Program ${i + 1}`}
                style={{ width: "120px", marginTop: "8px", borderRadius: "4px" }}
              />
            )}

            <button
              type="button"
              className="delete-btn"
              onClick={() => handleDelete("programs", i)}
            >
              🗑️ Delete Program
            </button>
          </div>
        ))}

        <button className="add-btn" onClick={() => handleAdd("programs")}>
          + Add Program
        </button>
      </div>

      <button className="save-btn" onClick={handleSave}>
        Save All
      </button>
    </div>
  );
}
