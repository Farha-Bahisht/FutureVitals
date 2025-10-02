import React, { useState } from "react";
import "./BlogAdmin.css";
import { Link } from "react-router-dom";

export default function BlogAdmin() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) formData.append("image", image);

    try {
      const res = await fetch("http://localhost:4000/api/blogs", {
        method: "POST",
        body: formData, // no headers for multipart
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Blog created successfully!");
        setTitle("");
        setContent("");
        setImage(null);
      } else {
        setMessage("❌ " + (data.error || "Error creating blog"));
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Server error. Try again later.");
    }
  };

  return (
    <div className="blog-admin">
        {/* Back button */}
      <Link to="/admin/blogs" className="back-btn">
        ← Back to Manage Blogs
      </Link>
      <h1>Add New Blog</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button type="submit">Publish</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};
