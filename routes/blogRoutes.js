import express from "express";
import {
  createBlog,
  deleteSingleBlog,
  getAllBlogs,
  getSingleBlog,
} from "../controller/blog.js";

const router = express.Router();

// create blog
router.post("/create", createBlog);

// get single blog
router.get("/single-blog/:id", getSingleBlog);

// get all blogs
router.get("/all", getAllBlogs);

// delete single blog
router.delete("/delete/:id", deleteSingleBlog);

export default router;
