import React from "react";

const AmountSection = (props) => {
  return (
    <div>
      <div className="amount-section" key="amount-icons-container">
        <p className="like-number">{props.likes} $</p>
      </div>
    </div>
  );
};

export default AmountSection;
