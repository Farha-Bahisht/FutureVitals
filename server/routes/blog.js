const express = require('express');
const Blog = require('../models/Blog');
const router = express.Router();
const upload = require('../middleware/upload'); // middleware we created

// POST /api/blogs → create a new blog post (with optional image upload)
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({ error: "Title and content are required" });
    }

    const newBlog = new Blog({
      title,
      content,
      imageUrl: req.file?.path || null
    });

    await newBlog.save();
    res.status(201).json({ message: "Blog created successfully", blog: newBlog });
  } catch (err) {
    console.error("Blog upload error:", err); // existing
  console.error("Error JSON:", JSON.stringify(err, null, 2)); // 👈 force readable
  res.status(500).json({ error: "Server error", details: err.message || err });
  }
});


// GET /api/blogs → get all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// GET /api/blogs/:id → get a single blog by id
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// PUT /api/blogs/:id → update blog (title, content, optional new image)
router.put('/:id', upload.single('image'), async (req, res) => {
  try {
    const { title, content } = req.body;

    // Find blog
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: "Blog not found" });

    // Update fields
    if (title) blog.title = title;
    if (content) blog.content = content;

    // If new image uploaded, replace
    if (req.file) blog.imageUrl = req.file.path;

    await blog.save();
    res.json({ message: "Blog updated successfully", blog });
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// DELETE /api/blogs/:id → delete blog
router.delete('/:id', async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ error: "Blog not found" });

    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
