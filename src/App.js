import React from "react";
import FormPost from "./component/body/form-component/mainPage";
import PizzaBuilder from "./component/body/form";
import Header from "./component/header/header";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <h1 align="center">Lambda Eats</h1>
      <Header />
      {/* <HeadPic /> */}

      <Route exact path="/" component={FormPost} />
      <Route path="/component" component={PizzaBuilder} />
    </>
  );
};
export default App;

/* 
import React, { useState } from "react";
import AmountSection from "./body/amount";

// import { fastfood } from "../data";
import "../App.css";
// import PizzaBuilder from "./body/form";

const MyMain = (props) => {
  //   console.log(props);
  return (
    <div className="FF" key={props.id}>
      <img src={props.url} alt={props.url} />
      <p className="nameP">{`${props.name}`}</p>
      <br></br>
      <p className="descP">{`${props.description}`}</p>
      <span className="info">{`${props.time}`}</span>{" "}
      <span className="info"> {props.amount} </span>
      <br></br>
    </div>

    //   </div>
    // </div>
  );
};

export default MyMain;

/* 
<div >
      {/* <div>
        <img src="Assets/Pizza.jpg" alt="myImg" />
      </div>
      <button>Button</button>
      <div className="Card-Wrapper">
        <h2 className="valid">
          Food Delivery in Gotham City
          <br></br>
        </h2> */
/* <div className="CardWrapper">
 */
