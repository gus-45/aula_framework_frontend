import React from "react";
import styled from "styled-components";

const Container_header = styled.div `
       padding: 15px;
    border-bottom: 1px solid #444;
    margin-bottom: 20px;
`
const Content_h1 = styled.h1 `
        font-size: 2em;
    font-weight: bold;
    color: #bb86fc;
    /* Cor de destaque para o texto */
`

function ContentHeader(props) {
  return (
    <Container_header className="content-header">
      <Content_h1>{props.titulo}</Content_h1>
    </Container_header>
  );
}

export default ContentHeader;
