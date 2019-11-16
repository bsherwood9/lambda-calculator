import React from "react";

const NumberButton = props => {
  console.log(props.label);
  return (
    <>
      <button
        className="numBtn circleBtn"
        onClick={() => {
          props.setDisplay(props.label);
        }}
      >
        {props.label}
      </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default NumberButton;
