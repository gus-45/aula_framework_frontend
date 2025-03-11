import React from "react";
import styled from "styled-components";

const Videocard_container = styled.div `
     background-color: transparent;
    text-shadow: 0 0 1px rgba(255, 255, 255, 0.3), 0 0 2px rgba(255, 255, 255, 0.3), 0 0 5px rgba(255, 255, 255, 0.2);
    border: 2px solid transparent;
    transition: border-color 0.3s ease;
    box-shadow: rgba(111, 66, 193, 0.9) 0px 0px 2px 0px, rgba(111, 66, 193, 0.4) 0px 0px 4px 0px, rgba(111, 66, 193, 0.3) 0px 0px 16px 0px, rgba(111, 66, 193, 0.1) 0px 0px 64px 0px;
    padding: 15px;
    border-radius: 8px;
    min-height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    &:hover {
      border-color: rgb(111, 66, 193);
    }
`

const Videocard_img = styled.img `
    width: 100%;
    height: 170px;
    object-fit: cover;
    border-radius: 8px;
    background-color: #444;
`

const Videocard_h3 = styled.h3 `
  line-height: 1.2em;
    margin-top: 12px;
    color: #e0e0e0;
    /* Ajuste na cor do título */
`

function VideoCard(props) {
  function clickVideo() {
    alert("Em breve...");
  }
  return (
    < Videocard_container onClick={clickVideo}>
      <Videocard_img src={props.imagem} alt={props.titulo} />
      <Videocard_h3>{props.titulo}</Videocard_h3>
      </Videocard_container>
  );
}

export default VideoCard;
