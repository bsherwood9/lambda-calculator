import React from "react";
import { labeledStatement } from "@babel/types";

const SpecialButton = props => {
  return (
    <>
      {
        <button className="circleBtn specBtn">
          {props.label}
        </button> /* Display a button element rendering the data being passed down from the parent container on props */
      }
    </>
  );
};

export default SpecialButton;
