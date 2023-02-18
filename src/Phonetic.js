import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <i class="fa-solid fa-volume-low"></i>{" "}
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
      <br />
      <span className="phonetic-text">{props.phonetic.text}</span>
    </div>
  );
}
