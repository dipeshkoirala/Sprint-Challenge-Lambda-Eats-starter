import React, { useState } from "react";

import { fastfood } from "../data";
import "../App.css";

const MyMain = (props) => {
  const [food] = useState(fastfood);

  return (
    <div>
      <img src="../Assets/Pizza.jpg" alt="myImg" />

      <button>Button</button>
      <div className="Card-Wrapper">
        <h2 className="valid">
          Food Delivery in Gotham City
          <br></br>
        </h2>
        <div className="CardWrapper">
          {food.map((a) => {
            return (
              <div className="FF">
                <img src={a.url} alt={a.url} />
                <p className="nameP">{`${a.name}`}</p>
                <br></br>
                <p className="descP">{`${a.Description}`}</p>
                <span className="info">{`${a.Time}`}</span>
                <span className="info">{`${a.Amount}`}</span>

                <br></br>
              </div>
            );
          })}
        </div>
      </div>

      {/* </Card> */}
    </div>
  );
};

export default MyMain;

/* 




*/
