import React from "react";

const qcMoveTable = props => {
  console.log("the qucik moves are", props.quickMoveData);
  console.log("the qucik moves are", props.chargeMoveData);

  let quickMoves = props.quickMoveData.map(element => {
    return { name: element.fastMoveName, energy: element.energy };
  });
  console.log(quickMoves);
  let chargeMoves = props.chargeMoveData.map(element => {
    return { name: element.chargeMoveName, energy: element.energy };
  });

  // let notTrue = true;
  // let counter = 1;

  
  console.log("the energy is ", quickMoves[0].energy);
  // while (notTrue) {
  //   let reminder = quickMoves[0].energy + chargeMoves[0].energy;
  //   if (reminder < 0) {
  //     counter = counter + 1;
  //   }
  // }

  // console.log("counter is", counter);
  console.log(chargeMoves);
  let data = [];
  props.quickMoveData.map(element => {
    for (let i in props.chargeMoveData) {
      console.log(i[0]);
    }
    // props.chargeMoveData.map(cm => {
    //   if (element.energy + cm.energy <= 0) {
    //     data.push(1);
    //   }
    //   //         element.
    //   // cm.energy
    // });
  });
  console.log(data);
  return (
    <div className={["table", "table-condensed", "table-striped"].join(" ")}>
      <div className="table-responsive">
        <h3> Quick Moves</h3>
        <table>
          <thead>
            <tr>
              <th key={1}>Stats</th>

              {props.quickMoveData.map(element => {
                return (
                  <th key={element.fastMoveName}>{element.fastMoveName}</th>
                );
              })}
            </tr>
          </thead>

          <tbody>
            {props.chargeMoveData.map(element => {
              return (
                <tr key={element.chargeMoveName}>{element.chargeMoveName}</tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default qcMoveTable;
