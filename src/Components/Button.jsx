import "./Button.css";
import React from "react";

const Button = (props) => {
  

  return (
    <span className="Button">
      
        <button
          type="button"
          className={"btn "+props.styleBootstrap}
          onClick={() => props.click(props.item)}
        >
          {props.label}
        </button>
      
    </span>
  );
};

export default Button;
