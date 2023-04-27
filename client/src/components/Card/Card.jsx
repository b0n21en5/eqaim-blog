import React from "react";
import { useNavigate } from "react-router-dom";
import "./card.css";

const Card = ({ blogs }) => {
  const navigate = useNavigate();

  const imgSrc =
    "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  const handleBlogCard = (e, id) => {
    e.preventDefault();
    navigate(`/blogpost/${id}`);
  };

  return (
    <>
      {blogs?.map((d, i) => (
        <div onClick={(e) => handleBlogCard(e, d._id)} className="card" key={i}>
          <img
            src={d.img[0] ? d.img : imgSrc}
            alt="img"
            width={"260px"}
            height={"80px"}
          />
          <div className="cardTitle">{d.title}</div>
        </div>
      ))}
    </>
  );
};

export default Card;
