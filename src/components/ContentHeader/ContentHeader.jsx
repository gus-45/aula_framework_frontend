import React from "react";
import "./ContentHeader.css";

function ContentHeader(props) {
  return (
    <div className="content-header">
      <h1>{props.titulo}</h1>
    </div>
  );
}

export default ContentHeader;
