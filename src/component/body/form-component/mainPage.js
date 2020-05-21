import React, { useState } from "react";
import { Link } from "react-router-dom";
//import AmountSection from "./body/amount";

import { fastfood } from "../../../data";
import "../../../App.css";

// const MyMain = (props) => {
//   //   console.log(props);
//   return (
//     <li>
//       {props.value}
//       <div className="FF" key={props.id}>
//         <img src={props.url} alt={props.url} />
//         <p className="nameP">{`${props.name}`}</p>
//         <br></br>
//         <p className="descP">{`${props.description}`}</p>
//         <span className="info">{`${props.time}`}</span>{" "}
//         <span className="info"> {props.amount} </span>
//         <br></br>
//       </div>
//     </li>
//   );
// };

// export default MyMain;

// import PizzaBuilder from "./body/form";

const MyMain = (pro) => {
  const [food] = useState(fastfood);

  return (
    <div>
      <img src="Assets/Pizza.jpg" alt="" />
      <Link to="/component">
        <span className="button"> Button</span>
      </Link>
      <div className="Card-Wrapper">
        <h2 className="valid">
          Food Delivery in Gotham City
          <br></br>
        </h2>
        <div className="CardWrapper">
          {food.map((a) => {
            return (
              <div className="FF">
                <div>
                  <img src={a.url} alt={a.url} />
                </div>
                <p className="nameP">{`${a.name}`}</p>
                <br></br>
                <p className="descP">{`${a.Description}`}</p>
                <span className="info">{`${a.Time}`}</span>{" "}
                <span className="info"> {a.Amount} </span>
                <br></br>
                {/* <AmountSection
                  url={a.url}
                  name={a.name}
                  description={a.description}
                  time={a.time}
                  amt={a.Amount}
                /> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyMain;

/* 




*/
