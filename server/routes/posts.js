const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().populate('category').populate('author');
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
});

// Create post
router.post('/', async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ message: 'Invalid Data', error });
  }
});

module.exports = router;
