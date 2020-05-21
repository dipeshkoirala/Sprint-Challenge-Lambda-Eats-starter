import React, { useState } from "react";
import valid from "../../../data";
import { titles } from "../../../data";

import { sauce1 } from "../../../data";
const Radio = () => {
  const [theValid] = useState(valid);
  const [title] = useState(titles);

  const [sauce] = useState(sauce1);
  return (
    /* This section is for to map the radio button on the page to select the Choice of Sauce*/
    <>
      <h2 className="valid">
        {title[0]}
        <br></br>
        <span>{theValid[0]}</span>
      </h2>
      {sauce.map((a) => {
        return (
          <div>
            <input
              className="sauce"
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
    </>
  );
};
export default Radio;
