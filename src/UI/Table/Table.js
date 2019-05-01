import React from "react";
import classes from "./Table.module.css";

const table = props => {
  console.log("inside props table", props.moveStats);
  console.log(props.moves);
  console.log("the data is data", props.moves);

  let moves = [];
  let data = [];
  let basePower = [];
  let duration = [];
  let energyDelta = [];
  let moveCooldown = [];

  for (let key in props.moveStats) {
    console.log(key);
  }
  for (let key in props.moves) {
    const moveKeys = Object.keys(props.moveStats);
    moveKeys.map(keys => {
      if (keys === key) {
        moves.push({ id: key, quickMoveStats: props.moveStats[key] });
      }
    });

    data.push(key);
  }

  console.log("the data is ", moves);
  // fining the largest
  // let largest = Math.max(
  //   ...moves.map(element => element.quickMoveStats.basePower)
  // );
  // basePower = moves.map(element => {
  //   console.log(largest);
  //   // const largest = Math.max(element.quickMoveStats.basePower);

  //   if (largest === element.quickMoveStats.basePower) {
  //     return (
  //       <td key={Math.random()} className={classes.Largest}>
  //         {element.quickMoveStats.basePower}
  //       </td>
  //     );
  //   } else {
  //     return <td key={Math.random()}>{element.quickMoveStats.basePower}</td>;
  //   }
  // });

  basePower = moves.map(el => {
    console.log("printing el now", el.quickMoveStats);
    return <td key={Math.random()}>{el.quickMoveStats.basePower}</td>;
  });

  duration = moves.map(el => {
    console.log("printing el now", el.quickMoveStats);
    return <td key={Math.random()}>{el.quickMoveStats.duration}</td>;
  });

  energyDelta = moves.map(el => (
    <td key={Math.random()}> {el.quickMoveStats.energyDelta}</td>
  ));
  moveCooldown = moves.map(el => (
    <td key={Math.random()}>{el.quickMoveStats.moveCooldown}</td>
  ));

  return (
    <div className={classes.Table}>
      <table>
        <thead>
          <tr>
            <th key={Math.random()} style={{ textAlign: "left" }}>
              Stats
            </th>
            {data.map((el, index) => {
              return <th key={Math.random()}>{el} </th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td key={Math.random()} style={{ textAlign: "left" }}>
              Base Power
            </td>
            {basePower}
          </tr>
          <tr>
            <td key={Math.random()} style={{ textAlign: "left" }}>
              Duration
            </td>
            {duration}
          </tr>
          <tr>
            <td key={Math.random()} style={{ textAlign: "left" }}>
              Energy Delta
            </td>
            {energyDelta}
          </tr>
          <tr>
            <td key={Math.random()} style={{ textAlign: "left" }}>
              Move Cooldown
            </td>
            {moveCooldown}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default table;
