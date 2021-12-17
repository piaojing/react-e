import React from "react";

export default function Cockpit(props) {
    const classes = [];
  if (props.personData.length <= 2) {
    classes.push("red");
  }
  if (props.personData.length <= 1) {
    classes.push("italic");
  }
  return (
    <div>
      <h1>Hi, I'm React App</h1>
      <p className={classes.join(" ")}>This is really working</p>
      <button id={props.id} onClick={props.onClick} style={props.style}>
        {props.toggle}
      </button>
    </div>
  );
}
