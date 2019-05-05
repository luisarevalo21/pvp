import React from "react";
import classes from "./Input.module.css";
import Select from "react-select";

const input = props => {
  let input = null;

  // console.log("props.moves", props.moves);
  // const options = [...props.moves];

  const options = props.moves.map(move => {
    return { value: move.Pokemon, label: move.Pokemon };
  });

  // console.log("options", options);

  switch (props.inputType) {
    case "select":
      input = (
        <Select
          value={props.selectedOption}
          onChange={props.changed}
          options={options}
          className={classes.InputElement}

          // className={classes.InputElement}
        />
      );
      break;
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>Select a Pokemon</label>
      {input}
    </div>
  );
};

export default input;
