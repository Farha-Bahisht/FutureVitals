import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./BlogDetail.css";

export const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`http://localhost:4000/api/blogs/${id}`);
        const data = await res.json();
        setBlog(data);
      } catch (err) {
        console.error("Error fetching blog:", err);
      }
      setLoading(false);
    };

    fetchBlog();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!blog) return <p>Blog not found.</p>;

  return (
    <div className="blog-detail">
      <Link to="/blog" className="back-link">← Back to Blog</Link>
      <h1>{blog.title}</h1>
      {blog.imageUrl && <img src={blog.imageUrl} alt={blog.title} className="blog-detail-img" />}
      <p>{blog.content}</p>
      <small>Published on {new Date(blog.createdAt).toLocaleDateString()}</small>
    </div>
  );
};
