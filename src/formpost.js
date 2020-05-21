import React, { useState } from "react";
// import AmountSection from "./body/amount";
import MyMain from "./component/body/form-component/mainPage";
import { fastfood } from "./data";
import "./App.css";

const FormPost = () => {
  //   const myfood = Array.from(fastfood);
  const [food] = useState(fastfood);
  console.log(food);
  const listItems = food.map((a) => <MyMain key={a.id} value={a} />);
  return <ul>{listItems}</ul>;
};

export default FormPost;

/* 


C:\Users\Anunaya\Desktop\LAMBDA\webpt16\React\Sprint-Challenge-Lambda-Eats-starter\src\component\body\amount.js

*/
