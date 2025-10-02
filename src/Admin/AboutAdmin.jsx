import { useState, useEffect } from "react";
import axios from "axios";
import "./AboutAdmin.css"; // make sure this is imported

export default function AboutAdmin() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:4000/api/aboutus").then((res) => {
      setAbout(res.data);
    });
  }, []);

  if (!about) return <p>Loading...</p>;

  const handleChange = (section, field, value) => {
    setAbout((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  };

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

  const handleSave = async () => {
    await axios.put("http://localhost:4000/api/aboutus", about);
    alert("About page updated!");
  };

  return (
    <div className="about-admin">
      <h2>Edit About Us Page</h2>

      {/* Mission */}
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
        <label>Image:</label>
        <input
          type="file"
          onChange={(e) =>
            handleChange("mission", "image", e.target.files[0]?.name)
          }
        />
      </div>

      {/* Programs */}
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
              onChange={(e) =>
                handleArrayChange(
                  "programs",
                  i,
                  "image",
                  e.target.files[0]?.name
                )
              }
            />
          </div>
        ))}
        <button className="add-btn" onClick={() => handleAdd("programs")}>
          + Add Program
        </button>
      </div>

      {/* Team */}
      <div className="form-section">
        <h3>Who We Are (Team)</h3>
        {about.team.map((member, i) => (
          <div key={i} className="form-subsection">
            <h4 className="item-title">Team Member {i + 1}</h4>
            <label>Name:</label>
            <input
              type="text"
              value={member.name}
              onChange={(e) =>
                handleArrayChange("team", i, "name", e.target.value)
              }
            />
            <label>Role:</label>
            <input
              type="text"
              value={member.role}
              onChange={(e) =>
                handleArrayChange("team", i, "role", e.target.value)
              }
            />
            <label>Quote:</label>
            <textarea
              value={member.quote}
              onChange={(e) =>
                handleArrayChange("team", i, "quote", e.target.value)
              }
            />
            <label>Image:</label>
            <input
              type="file"
              onChange={(e) =>
                handleArrayChange("team", i, "image", e.target.files[0]?.name)
              }
            />
          </div>
        ))}
        <button className="add-btn" onClick={() => handleAdd("team")}>
          + Add Team Member
        </button>
      </div>

      <button className="save-btn" onClick={handleSave}>
        Save All
      </button>
    </div>
  );
}
