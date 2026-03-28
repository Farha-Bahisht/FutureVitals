import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./BlogAdmin.css";

export default function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  // Load blog data when page opens
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`https://futurevitals1-1.onrender.com/api/blogs/${id}`);
        const data = await res.json();

        if (res.ok) {
          setTitle(data.title);
          setContent(data.content);
        } else {
          setMessage("❌ Blog not found");
        }
      } catch (err) {
        setMessage("❌ Error fetching blog");
      }
    };

    fetchBlog();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) formData.append("image", image);

    try {
      const res = await fetch(`https://futurevitals1-1.onrender.com/api/blogs/${id}`, {
        method: "PUT",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Blog updated successfully!");
        setTimeout(() => navigate("/admin/blogs"), 1500);
      } else {
        setMessage("❌ Error: " + (data.error || "Try again later."));
      }
    } catch (err) {
      setMessage("❌ Server error. Try again later.");
    }
  };

  return (
    <div className="blog-admin">
      <h1>Edit Blog</h1>

      {/* Back button */}
      <Link to="/admin/blogs" className="back-btn">
        ← Back to Manage Blogs
      </Link>

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
        <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
        <button type="submit">Update Blog</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};
