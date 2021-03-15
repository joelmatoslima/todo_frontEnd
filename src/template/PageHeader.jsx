import React from "react";
import "./PageHeader.css";

const PageHeader = (props) => {
  return (
    <header className="page-header">
      <h2>
        {props.nome} <small>{props.small}</small>{" "}
      </h2>
      

      <hr />
    </header>
  );
};

export default PageHeader;
