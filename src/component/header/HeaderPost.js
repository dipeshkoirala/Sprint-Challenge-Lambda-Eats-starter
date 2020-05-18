import React from "react";

const HeaderPost = (props) => {
  console.log(props);
  return (
    <div className="head-wrapper" key={props.id}>
      <img src={props.myurl} alt={props.myurl} />
    </div>
  );
};
export default HeaderPost;
