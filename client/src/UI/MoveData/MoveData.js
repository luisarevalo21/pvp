import React from "react";
import classes from "./MoveData.module.css";

const moveData = props => (
  <div className={classes.MoveData}>
    <p className={classes.MoveName}>{props.name}</p>
    <p>Duration: {props.duration}</p>
    <p>Energy Delta: {props.energyDelta}</p>
    <p>Base Power: {props.basePower}</p>
    <p>Move Cooldown: {props.moveCooldown}</p>
  </div>
);

export default moveData;
