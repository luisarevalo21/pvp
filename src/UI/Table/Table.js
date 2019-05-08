import React from "react";
import classes from "./Table.module.css";

const table = props => {
  console.log("the moves are", props.quickMoves);
  // console.log("selected pokemon ", props.selectedPokemon);
  // console.log("legacy moves are", props.legacyMoves);

  const quickMoves = [];
  const chargeMoves = [];
  let quickMoveData = [];
  let chargeMoveData = [];
  let legacyMoves = [];
  props.legacyMoves.map(element => {
    legacyMoves.push(element.legacyName);
  });

  console.log("legayc moves arrat is ", legacyMoves);
  const copy = { ...props.selectedPokemon[0] };
  // console.log("copy", copy);
  // let filertedData = {};
  for (let key in copy) {
    // console.log("the key is", key);
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
    // else if (
    //   key === "legacy move 1" ||
    //   key === "legacy move 2" ||
    //   key === "legacy move 3" ||
    //   key === "legacy move 4" ||
    //   key === "legacy move 5"
    // ) {
    //   legacyMoves.push(copy[key]);
    // }

    // console.log("value is", props.quickMoves.map());
  }
  // console.log("legacy moves", legacyMoves);

  // console.log("QUICK MOES AARE", quickMoves);
  // console.log("quick moves are", quickMoves);
  quickMoveData = props.quickMoves
    .map(element => {
      let data = [];
      for (let key in quickMoves) {
        // console.log("keys are", quickMoves[key].key);
        // console.log("keys are", element.fastMoveName);

        // console.log("element. fastmovev name", element);
        // console.log("the key is", chargeMoves[key].key);
        // console.log("element quick moves[key].key", quickMoves[key].key);
        if (element.fastMoveName === quickMoves[key].key) {
          // console.log("inside the if");
          // console.log("element inside if", element);
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
      return accumulator.concat(currentValue);
      // return accumulator[currentValue];
    });

  console.log("quick move data is data", quickMoveData);
  console.log(
    "quick move data",
    Math.max.apply(null, quickMoveData.map(element => element.basePower))
  );

  console.log("quick move data", quickMoveData.sort());
  chargeMoveData = props.chargeMoves
    .map(element => {
      let data = [];
      // console.log("eleent inside map is", element);
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
      return accumulator.concat(currentValue);
      // return accumulator[currentValue];
    });
  // console.log("charge moves array is ", chargeMoveData);

  let basePower = [];

  console.log(props.quickMoves);
  let array = [];
  let duration = [];
  let energyDelta = [];
  let moveCooldown = [];
  let energyPerDuration = [];
  let damagePerDuration = [];
  basePower = quickMoveData.map(el => {
    array.push(el.basePower);

    console.log("printing el now", el.basePower);
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
  energyPerDuration = quickMoveData.map(el => (
    <td key={Math.random()}> {el.energyPerDuration}</td>
  ));
  damagePerDuration = quickMoveData.map(el => (
    <td key={Math.random()}> {el.damagePerDuration}</td>
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
              // console.log("element inside quicmoves", legacyMoves);
              console.log(legacyMoves.includes(element.key));
              if (legacyMoves.includes(element.key)) {
                return <th key={element.key}>{element.key}*</th>;
              } else {
                // console.log(
                //   "HERE IS THE VLUE NOW",
                // legacyMoves.map(legacy => {
                //   console.log("element .key ", element.key);
                //   console.log("legacy ", legacy);

                //   if (element.key === legacy) {
                //     return <th key={element.key}>{element.key}*</th>;
                //   } else {
                return <th key={element.key}>{element.key}</th>;
              }
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
          <tr>
            <td key={Math.random()}>Energy Per Duration</td>
            {energyPerDuration}
          </tr>
          <tr>
            <td key={Math.random()}>Damage Per Duration</td>
            {damagePerDuration}
          </tr>
        </tbody>
      </table>
      <p>* indicates legacy move</p>
      <br />
      <h3>Charge Moves</h3>
      <table>
        <thead>
          <tr>
            <th key={Math.random()}>Stats</th>
            {chargeMoveData.map(element => {
              if (legacyMoves.includes(element.chargeMoveName)) {
                return (
                  <th key={element.chargeMoveName}>
                    {element.chargeMoveName}*
                  </th>
                );
              } else {
                return (
                  <th key={element.chargeMoveName}>{element.chargeMoveName}</th>
                );
              }
            })}
          </tr>
        </thead>

        <tbody>
          <tr>
            <td key={Math.random()}>Base Power</td>
            {chargeMoveData.map(element => {
              // console.log("the eelement is", element);
              return <th key={element.chargeMoveName}>{element.basePower}</th>;
            })}
          </tr>
          <tr>
            <td key={Math.random()}>Charge Energy</td>
            {chargeMoveData.map(element => {
              // console.log(element);
              return <th key={element.chargeMoveName}>{element.energy}</th>;
            })}
          </tr>
          <tr>
            <td key={Math.random()}>Damage Per Energy</td>
            {chargeMoveData.map(element => {
              console.log(element);
              return (
                <th key={element.chargeMoveName}>{element.damagePerEnergy}</th>
              );
            })}
          </tr>
        </tbody>
      </table>
      <p>* indicates legacy move</p>
    </div>
  );
};

export default table;
