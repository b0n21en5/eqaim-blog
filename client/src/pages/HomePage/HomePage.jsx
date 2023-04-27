import React from "react";
import Layout from "../../components/Layout/Layout";
import useFetch from "../../hooks/useFetch";
import Card from "../../components/Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCirclePlus } from "@fortawesome/free-solid-svg-icons";
import "./homepage.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { data } = useFetch("/all");
  const navigate = useNavigate();

  return (
    <>
      <Layout title="Eqaim Blog - Home">
        <div className="cardContainer">
          {data && <Card blogs={data.allBlogs} />}
        </div>
        <div className="addBlogIcon" onClick={() => navigate("/newblog")}></div>
        <div className="icon addIcon" onClick={() => navigate("/newblog")}>
          <FontAwesomeIcon icon={faFileCirclePlus} size="2xl" />
        </div>
      </Layout>
    </>
  );
};

export default HomePage;
