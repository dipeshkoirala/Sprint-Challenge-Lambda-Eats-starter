import React, { useState } from "react";
import "../../App.css";
import { HeadPic } from "../../data";
import HeaderPost from "./HeaderPost";
import { Link } from "react-router-dom";
import "../../App.css";

const Header = () => {
  const [image] = useState(HeadPic);
  const navTitle = ["Home", "Help"];

  return (
    <div className="headerContainter">
      <hr></hr>
      <nav className="header-nav">
        <h2 className="header">LAMBDA EATS</h2>
        <ul className="head-span">
          {navTitle.map((a) => {
            // return (
            if (a === "Home") {
              return (
                <Link to="/">
                  <ol> {a} </ol>
                </Link>
              );
            }
            return (
              <Link to="/component">
                <ol>{a}</ol>
              </Link>
            );
          })}
        </ul>
      </nav>
      <hr></hr>
      <div>
        {image.map((a) => {
          return <HeaderPost key={a.id} myurl={a.url} />;
        })}
      </div>
    </div>
  );
};
export default Header;
