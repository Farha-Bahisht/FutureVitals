import { useState, useEffect } from "react";
import axios from "axios";

export default function AboutAdmin() {
  const [content, setContent] = useState("");

  useEffect(() => {
    axios.get("http://localhost:4000/api/aboutus").then((res) => {
      if (res.data?.content) setContent(res.data.content);
    });
  }, []);

  const handleSave = async () => {
    await axios.put("http://localhost:4000/api/aboutus", { content });
    alert("About Us updated!");
  };

  return (
    <div>
      <h2>Edit About Us</h2>
      <textarea
        rows={8}
        cols={60}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <br />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
