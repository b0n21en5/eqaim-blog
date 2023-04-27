import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="headerContainer">
      <div className="heading" onClick={() => navigate("/")}>
        Eqaim Blog
      </div>
    </div>
  );
};

export default Header;
