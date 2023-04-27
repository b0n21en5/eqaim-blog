import React from "react";
import Layout from "../../components/Layout/Layout";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseCircleExclamation,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import "./blogpost.css";
import { toast } from "react-hot-toast";
import axios from "axios";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data } = useFetch(`/single-blog/${id}`);

  const deleteBlogButton = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.delete(`/delete/${id}`);
      toast.success("Successfully Deleted Blog");
      navigate("/");
    } catch (error) {
      toast.error("Something Went Wrong!");
    }
  };

  return (
    <Layout title={"Equim - BlogPost"}>
      {data.singleBlog && (
        <div className="blogContainer">
          <div className="iconContainer">
            <div className="icon">
              <FontAwesomeIcon
                icon={faHouseCircleExclamation}
                onClick={(e) => navigate("/")}
              />
            </div>
            <div className="icon">
              <FontAwesomeIcon
                icon={faTrash}
                onClick={(e) => deleteBlogButton(e)}
              />
            </div>
          </div>
          <div className="blogHeading">{data.singleBlog.title}</div>
          <div className="blogBody">{data.singleBlog.blogBody}</div>
        </div>
      )}
    </Layout>
  );
};

export default BlogPost;
