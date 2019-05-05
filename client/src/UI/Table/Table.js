import React from "react";
import classes from "./Table.module.css";

const table = props => {
  console.log("the moves are", props.quickMoves);
  console.log("selected pokemon ", props.selectedPokemon);
  const quickMoves = [];
  const chargeMoves = [];
  let quickMoveData = [];
  let chargeMoveData = [];
  const copy = { ...props.selectedPokemon[0] };
  // console.log("copy", copy);
  // let filertedData = {};
  for (let key in copy) {
    // console.log(key);
    if (
      key === "quick move 1" ||
      key === "quick move 2" ||
      key === "quick move 3" ||
      key === "quick move 4" ||
      key === "quick move 5"
    ) {
      quickMoves.push({ key: copy[key] });
    }
    if (
      key === "charge move 1" ||
      key === "charge move 2" ||
      key === "charge move 3" ||
      key === "charge move 4" ||
      key === "charge move 5" ||
      key === "charge move 6" ||
      key === "charge move 7" ||
      key === "charge move 8"
    ) {
      chargeMoves.push({ key: copy[key] });
    }

    console.log("charge moves", chargeMoves);
    // console.log("value is", props.quickMoves.map());
  }
  // console.log("QUICK MOES AARE", quickMoves);
  // console.log("quick moves are", quickMoves);
  quickMoveData = props.quickMoves
    .map(element => {
      let data = [];
      for (let key in quickMoves) {
        // console.log("keys are", quickMoves[key].key);
        // console.log("keys are", element.fastMoveName);

        if (element.fastMoveName === quickMoves[key].key) {
          console.log("inside the if");
          data.push(element);
        }
      }
      // console.log(data);
      return data;

      // return element.fastMoveName === quickMoves[element.fastMoveName];
    })
    .reduce((accumulator, currentValue) => {
      // console.log("accumlator is ", accumulator);
      // console.log("curentvalue is ", currentValue);
      return currentValue.concat(accumulator);
      // return accumulator[currentValue];
    });
  chargeMoveData = props.chargeMoves
    .map(element => {
      let data = [];
      for (let key in chargeMoves) {
        // console.log("keys are", quickMoves[key].key);
        // console.log("keys are", element.fastMoveName);

        if (element.chargeMoveName === chargeMoves[key].key) {
          data.push(element);
        }
      }
      // console.log(data);
      return data;

      // return element.fastMoveName === quickMoves[element.fastMoveName];
    })
    .reduce((accumulator, currentValue) => {
      // console.log("accumlator is ", accumulator);
      // console.log("curentvalue is ", currentValue);
      return currentValue.concat(accumulator);
      // return accumulator[currentValue];
    });
  console.log("charge moves array is ", chargeMoveData);

  let basePower = [];
  let duration = [];
  let energyDelta = [];
  let moveCooldown = [];

  basePower = quickMoveData.map(el => {
    // console.log("printing el now", el.quickMoveStats);
    return <td key={Math.random()}>{el.basePower}</td>;
  });

  duration = quickMoveData.map(el => {
    // console.log("printing el now", el.quickMoveStats);
    return <td key={Math.random()}>{el.duration}</td>;
  });

  energyDelta = quickMoveData.map(el => (
    <td key={Math.random()}> {el.energyGained}</td>
  ));
  moveCooldown = quickMoveData.map(el => (
    <td key={Math.random()}>{el.cooldown} </td>
  ));

  return (
    <div
      className={[
        "table",
        "table-condensed",
        "table-striped",
        classes.Table
      ].join(" ")}
    >
      <h3> Quick Moves</h3>

      <table>
        <thead>
          <tr>
            <th key={Math.random()}>Stats</th>

            {quickMoves.map(element => {
              return <th key={element.key}>{element.key}</th>;
            })}
            {/* 
            {data.map((el, index) => {
              return <th key={Math.random()}>{el} </th>;
            })} */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td key={Math.random()}>Base Power</td>
            {basePower}
          </tr>
          <tr>
            <td key={Math.random()}>Duration</td>
            {duration}
          </tr>
          <tr>
            <td key={Math.random()}>Energy Delta</td>
            {energyDelta}
          </tr>
          <tr>
            <td key={Math.random()}>Move Cooldown</td>
            {moveCooldown}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default table;
