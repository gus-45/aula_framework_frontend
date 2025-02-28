import React from "react";
import "./VideoCard.css";

function VideoCard(props) {
  function clickVideo() {
    alert("Em breve...");
  }
  return (
    <div className="video-card" onClick={clickVideo}>
      <img src={props.imagem} alt={props.titulo} />
      <h3>{props.titulo}</h3>
    </div>
  );
}

export default VideoCard;
