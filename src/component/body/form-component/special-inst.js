import React, { useState } from "react";
import valid from "../../../data";
import { titles } from "../../../data";

const SpecialInstruction = () => {
  const [theValid] = useState(valid);
  const [title] = useState(titles);

  return (
    <>
      {/* This section is for special instruction */}
      <h2 className="valid">
        {title[4]}
        <br></br>
        <span>{theValid[4]}</span>
      </h2>
      <input
        id="special"
        type="text"
        name="spinstruction"
        // value="{`${a}`}"
        placeholder={`${theValid[3]}`}
      />
    </>
  );
};
export default SpecialInstruction;
