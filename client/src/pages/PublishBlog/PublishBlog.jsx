import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpload,
  faHouseCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./publishblog.css";
import axios from "axios";
import { toast } from "react-hot-toast";

const PublishBlog = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState("");
  const navigate = useNavigate();

  const handleInputValue = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmitBlog = async (e) => {
    e.preventDefault();
    if (!info.title) {
      toast.error("Title Required");
      return;
    } else if (!info.blogBody) {
      toast.error("Blog Required");
      return;
    }
    try {
      const imgUrl = await Promise.all(
        Object.values(file).map(async (f) => {
          const imgData = new FormData();
          imgData.append("file", f);
          imgData.append("upload_preset", "upload");
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/dlhfsa5gl/image/upload",
            imgData
          );
          const { url } = uploadRes.data;

          toast.success("Successfully Created New Blog");
          navigate("/");

          return url;
        })
      );

      const newBlog = { ...info, img: imgUrl };

      const data = await axios.post("/create", newBlog);
    } catch (error) {
      toast.error("Something Went Wrong!");
    }
  };

  return (
    <Layout title={"Publish New Blog"}>
      <div className="blogContainer">
        <div className="iconContainer">
          <div className="icon">
            <FontAwesomeIcon
              icon={faHouseCircleExclamation}
              onClick={() => navigate("/")}
            />
          </div>
          <div className="icon" onClick={handleSubmitBlog}>
            <FontAwesomeIcon icon={faUpload} />
          </div>
        </div>
        <div className="blogScreen">
          <div className="toolbar"></div>
          <div className="blogArea">
            <input
              type="text"
              name="title"
              placeholder="Add Blog Title"
              className="title"
              onChange={handleInputValue}
              required
            />
            <textarea
              name="blogBody"
              placeholder="Type Your Blog Here"
              id=""
              cols="30"
              rows="7"
              onChange={handleInputValue}
            ></textarea>
            <input type="file" onChange={(e) => setFile(e.target.files)} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PublishBlog;
