import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BlogAdminList.css";

export default function BlogAdminList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all blogs
  const fetchBlogs = async () => {
    try {
      const res = await fetch("https://futurevitals1-1.onrender.com/api/blogs");
      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Handle delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    try {
      const res = await fetch(`https://futurevitals1-1.onrender.com/api/blogs/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (res.ok) {
        alert("Blog deleted successfully");
        fetchBlogs(); // reload list
      } else {
        alert("Error: " + (data.error || "Could not delete blog"));
      }
    } catch (err) {
      alert("Server error while deleting blog");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="blog-admin-list">
      <h1>Manage Blogs</h1>
      
      {/* Add New Blog button */}
      <Link to="/admin/blogs/new" className="add-blog-btn">
        + Add New Blog
      </Link>

      {blogs.length === 0 ? (
        <p>No blogs yet.</p>
      ) : (
        <ul>
          {blogs.map((blog) => (
            <li key={blog._id}>
              <h3>{blog.title}</h3>
              <Link to={`/admin/blogs/edit/${blog._id}`}>Edit</Link>
              <button onClick={() => handleDelete(blog._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
