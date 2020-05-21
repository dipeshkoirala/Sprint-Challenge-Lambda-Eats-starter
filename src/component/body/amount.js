import React, { useState } from "react";
import { Button } from "reactstrap";
import { substitute1 } from "../../data";
const AmountSection = (props) => {
  console.log(props);
  const [substitute] = useState(substitute1);
  return (
    <div>
      <div className="amount-section" key="amount-icons-container">
        <Button
          size="lg"
          outline
          color="danger"
          onclick={props.IsglutenFree}

          // active={selSubstitute === "No"}
        >
          {console.log(props.amount)}
        </Button>

        <span>{` ${substitute[0].title} (+ $${props.amount}.00)`}</span>
        <br></br>
      </div>
    </div>
  );
};

export default AmountSection;
