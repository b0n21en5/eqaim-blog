import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PublishBlog from "./pages/PublishBlog/PublishBlog";
import BlogPost from "./pages/BlogPost/BlogPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogpost/:id" element={<BlogPost />} />
        <Route path="/newblog" element={<PublishBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
