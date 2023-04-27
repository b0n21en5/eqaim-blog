import exp from "constants";
import blogs from "../models/blogs.js";

// create blog controller ( post )
export const createBlog = async (req, res) => {
  try {
    const { title, blogBody, img } = req.body;
    const saved = new blogs({ title, blogBody, img }).save();

    res.status(200).send({
      success: true,
      message: "Successfully Created Blog",
      saved,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while creating blog",
      error,
    });
  }
};

// get single blog
export const getSingleBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const singleBlog = await blogs.findById(id);
    res.status(200).send({
      success: true,
      message: "Successfully Fetched a Blog",
      singleBlog,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting blog",
      error,
    });
  }
};

// get all blogs controller ( get )
export const getAllBlogs = async (req, res) => {
  try {
    const allBlogs = await blogs.find({});
    res.status(200).send({
      success: true,
      message: "Successfully Fetched All Blogs",
      allBlogs,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Fetching Blogs",
      error,
    });
  }
};

// delete single blog
export const deleteSingleBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await blogs.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Successfully Deleted blog",
      data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting blog",
      error,
    });
  }
};
