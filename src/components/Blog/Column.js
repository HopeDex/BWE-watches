import React from "react";
import { Img, Title, BottomLine } from "./BlogElements";
const Column = ({ id, title, image, alt, bottom }) => {
  const mystyle = {
    width: "40%",
    height: "5px",
    color: "white",
  };

  return (
    <>
      <div className={id}>
        <hr style={mystyle} />
        <Title>{title}</Title>
        <div className="overlay">
          <Img src={image} alt={alt} class="image" />
          <Title>{title}</Title>
          <BottomLine>{bottom}</BottomLine>
        </div>
      </div>
    </>
  );
};

export default Column;
