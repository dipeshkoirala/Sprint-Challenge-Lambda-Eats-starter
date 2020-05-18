import React, { useState } from "react";

import Header from "./header/header";
import valid from "../data";
import { titles } from "../data";
import { size1 } from "../data";

const PizzaBuilder = () => {
  const [theValid] = useState(valid);
  const [title] = useState(titles);
  const [size] = useState(size1);

  return (
    <div>
      <div className="pizza">
        <Header />
        <h1> Build Your Own Pizza </h1>
        <h2 className="valid">
          {title[0]}
          <br></br>
          <span>{theValid[0]}</span>
        </h2>
        <select name="size">
          <option>{size[0]}</option>
          <option>{size[1]}</option>
          <option>{size[2]}</option>
        </select>
        <p>"just for test"</p>
      </div>
    </div>
  );
};
export default PizzaBuilder;
