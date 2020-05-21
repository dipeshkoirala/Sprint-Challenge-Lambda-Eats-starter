import React, { useState } from "react";
import valid from "../../../data";
import { titles } from "../../../data";
import { size1 } from "../../../data";

const ChoiceBuilder = () => {
  const [theValid] = useState(valid);
  const [title] = useState(titles);
  const [size] = useState(size1);
  return (
    <>
      {/* <Header /> */}
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
    </>
  );
};
export default ChoiceBuilder;
