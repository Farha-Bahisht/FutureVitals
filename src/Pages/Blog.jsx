import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

export const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/blogs");
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error("Error fetching blogs", err);
      }
      setLoading(false);
    };

    fetchBlogs();
  }, []);

  if (loading) return <p>Loading blogs...</p>;

  return (
    <div className="blog-list">
      <h1>Our Blog</h1>
      {blogs.length === 0 ? (
        <p>No blog posts yet.</p>
      ) : (
        blogs.map((blog) => (
          <div className="blog-card" key={blog._id}>
            {blog.imageUrl && (
              <img src={blog.imageUrl} alt={blog.title} className="blog-img" />
            )}
            <h2>{blog.title}</h2>
            <p>{blog.content.substring(0, 150)}...</p>
            <Link to={`/blog/${blog._id}`} className="read-more">
              Read More →
            </Link>
          </div>
        ))
      )}
    </div>
  );
};
