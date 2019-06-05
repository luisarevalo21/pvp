import React from "react";
import classes from "./MewTable.module.css";

const table = props => {
  //   console.log("props.seclect pokemon", props.selectedPokemon);

  //   console.log("the moves are", props.quickMoves);
  //   console.log("selected pokemon ", props.selectedPokemon);
  //   //   console.log("legacy moves are", props.legacyMoves);
  const quickMoves = [];
  const chargeMoves = [];
  let quickMoveData = [];
  let chargeMoveData = [];
  const copy = { ...props.selectedPokemon[0] };

  for (let key in copy) {
    // console.log("the key is", key);
    if (
      key === "quick move 1" ||
      key === "quick move 2" ||
      key === "quick move 3" ||
      key === "quick move 4" ||
      key === "quick move 5" ||
      key === "quick move 6" ||
      key === "quick move 7" ||
      key === "quick move 8" ||
      key === "quick move 9" ||
      key === "quick move 10" ||
      key === "quick move 11" ||
      key === "quick move 12" ||
      key === "quick move 13" ||
      key === "quick move 14"
    ) {
      // console.log("THE COPY KEY IS", copy[key]);
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
      key === "charge move 8" ||
      key === "charge move 9" ||
      key === "charge move 10" ||
      key === "charge move 11" ||
      key === "charge move 12" ||
      key === "charge move 13" ||
      key === "charge move 14" ||
      key === "charge move 15" ||
      key === "charge move 16" ||
      key === "charge move 17" ||
      key === "charge move 18" ||
      key === "charge move 19" ||
      key === "charge move 20" ||
      key === "charge move 21" ||
      key === "charge move 22" ||
      key === "charge move 23" ||
      key === "charge move 24" ||
      key === "charge move 24"
    ) {
      chargeMoves.push({ key: copy[key] });
    }
  }

  quickMoveData = props.quickMoves
    .map(element => {
      let data = [];
      for (let key in quickMoves) {
        if (element.fastMoveName === quickMoves[key].key) {
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
  //   console.log("quick move data is data", quickMoveData);
  //   // console.log(
  //   //   "quick move data",
  //   //   Math.max.apply(null, quickMoveData.map(element => element.basePower))
  //   // );
  //   // console.log("quick move data", quickMoveData.sort());
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
  //   console.log("charge moves array is ", chargeMoveData);
  // console.log(props.quickMoves);
  // let array = [];
  let basePower = [];
  let duration = [];
  let energy = [];
  let damagePerTurn = [];
  let energyPerTurn = [];
  basePower = quickMoveData.map(el => {
    // array.push(el.basePower);
    // console.log("printing el now", el.basePower);
    return <td key={el.basePower + Math.random()}>{el.basePower}</td>;
  });
  duration = quickMoveData.map(el => {
    // console.log("printing el now", el.quickMoveStats);
    return <td key={el.duration + Math.random()}>{el.duration}</td>;
  });
  energy = quickMoveData.map(el => (
    <td key={el.energy + Math.random()}> {el.energy}</td>
  ));
  damagePerTurn = quickMoveData.map(el => (
    <td key={el.damagePerTurn + Math.random()}>{el.damagePerTurn} </td>
  ));
  energyPerTurn = quickMoveData.map(el => (
    <td key={el.energyPerTurn + Math.random()}> {el.energyPerTurn}</td>
  ));
  // damagePerDuration = quickMoveData.map(el => (
  //   <td key={el.damagePerDuration + Math.random()}> {el.damagePerDuration}</td>
  // ));
  return (
    <div
      className={[
        "table",
        "table-condensed",
        "table-striped",
        classes.MewTable
      ].join(" ")}
    >
      <div className="table-responsive">
        <h3> Quick Moves</h3>
        <table>
          <thead>
            <tr>
              <th key={1}>Stats</th>
              {quickMoveData.map(element => {
                // // console.log("element inside quicmoves", data);
                // console.log("key is", element);

                // console.log("element is", element.fastMoveName);
                // // console.log(
                // //   "HERE IS THE VLUE NOW",
                // // legacyMoves.map(legacy => {
                // //   console.log("element .key ", element.key);
                // //   console.log("legacy ", legacy);
                // //   if (element.key === legacy) {
                // //     return <th key={element.key}>{element.key}*</th>;
                // //   } else {
                return (
                  <th key={element.fastMoveName + Math.random()}>
                    {element.fastMoveName}
                  </th>
                );
              })}

              {/*
              {data.map((el, index) => {
                return <th key={Math.random()}>{el} </th>;
              })} */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td key={2}>Base Power</td>
              {basePower}
            </tr>
            <tr>
              <td key={3}>Energy</td>
              {energy}
            </tr>
            <tr>
              <td key={4}>Duration</td>
              {duration}
            </tr>
            <tr>
              <td key={5}>Damage Per Turn</td>
              {damagePerTurn}
            </tr>
            <tr>
              <td key={6}>Energy Per Turn</td>
              {energyPerTurn}
            </tr>
            {/* <tr>
              <td key={7}>Energy Per Turn</td>
              {energyPerTurn}
            </tr> */}
          </tbody>
        </table>
        <p>* indicates legacy move</p>
      </div>
      <br />
      <div className="table-responsive">
        <h3>Charge Moves</h3>
        <table>
          <thead>
            <tr>
              <th key={8}>Stats</th>
              {chargeMoveData.map(element => {
                // if (props.legacyMoves.includes(element.chargeMoveName)) {
                //   return (
                //     <th key={element.chargeMoveName}>
                //       {element.chargeMoveName}*
                //     </th>
                //   );
                // } else {
                return (
                  <th key={element.chargeMoveName}>{element.chargeMoveName}</th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td key={9}>Base Power</td>
              {chargeMoveData.map(element => {
                // console.log("the eelement is", element);
                return (
                  <th key={element.chargeMoveName}>{element.basePower}</th>
                );
              })}
            </tr>
            <tr>
              <td key={10}>Charge Energy</td>
              {chargeMoveData.map(element => {
                // console.log(element);
                return <th key={element.chargeMoveName}>{element.energy}</th>;
              })}
            </tr>
            <tr>
              <td key={11}>Damage Per Energy</td>
              {chargeMoveData.map(element => {
                // console.log(element);
                return (
                  <th key={element.chargeMoveName}>
                    {element.damagePerEnergy}
                  </th>
                );
              })}
            </tr>
          </tbody>
        </table>
        {/* <p>* indicates legacy move</p> */}
      </div>
    </div>
  );
  // };
};

export default table;
