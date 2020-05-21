import React from "react";

const HeaderPost = (props) => {
  // console.log(props);
  return (
    <div className="head-wrapper" key={props.id}>
      <img src={props.myurl} alt={"dk-img"} />
    </div>
  );
};
export default HeaderPost;
