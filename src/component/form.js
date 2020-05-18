import React, { useState } from "react";

import Header from "./header/header";
import valid from "../data";
import { titles } from "../data";
import { size1 } from "../data";

import { sauce1 } from "../data";
import { toppings1 } from "../data";
import { substitute1 } from "../data";

const PizzaBuilder = () => {
  const [theValid] = useState(valid);
  const [title] = useState(titles);
  const [size] = useState(size1);
  const [sauce] = useState(sauce1);
  const [toppings] = useState(toppings1);
  const [substitute] = useState(substitute1);

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
        {/* This section is for to map the radio button on the page to select the Choice of Sauce*/}
        <h2 className="valid">
          {title[0]}
          <br></br>
          <span>{theValid[0]}</span>
        </h2>
        {sauce.map((a) => {
          return (
            <div>
              <input
                id={`${a}`}
                type="radio"
                name="saucechoice"
                value={`${a}`}
              />
              <label htmlFor={`${a}`}>{a}</label>
              <br></br>
            </div>
          );
        })}
        {/* This section is for mapping our toppings checkbox */}
        <h2 className="valid">
          {title[1]}
          <br></br>
          <span>{theValid[1]}</span>
        </h2>
        {toppings.map((a) => {
          return (
            <div className="check">
              <input
                id={`${a}`}
                type="checkbox"
                name="topping"
                value={`${a}`}
              />
              <label htmlFor={`${a}`}>{a}</label>
              <br></br>
            </div>
          );
        })}

        <p>"just for test"</p>
      </div>
    </div>
  );
};
export default PizzaBuilder;
