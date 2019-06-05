import React from "react";
import classes from "./Input.module.css";
import Select from "react-select";
// import input from ""
const input = props => {
  let input = null;

  // console.log("props.moves", props.moves);
  // const options = [...props.moves];

  // const options = props.pokemon.map(element => {
  //   return { value: element.pokemonName, label: element.pokemonName };
  // });

  // console.log("options", options);

  // console.log("THE PROPS ARE", props.inputType);
  // console.log("props.value", props.value);

  switch (props.inputType) {
    case "select":
      // const options = props.pokemon.map(element => {
      //   return { value: element.pokemonName, label: element.pokemonName };
      // });
      input = (
        <Select
          value={props.selectedOption}
          onChange={props.changed}
          options={props.options}
          className={classes.InputElement}

          // className={classes.InputElement}
        />
      );
      break;

    case "pokemon":
      console.log("inside case pokemon");
      input = (
        <div>
          {/* <label>{props.title}</label> */}
          <input
            className="form-control"
            type="text"
            placeholder={props.placeholder}
          />
        </div>
      );

      break;
    case "quickMoveData":
      input = (
        <div className="container" style={{ color: "#48e08d" }}>
          <div className="row">
            <div className="col-sm">
              Base Power <input placeholder="0" type="number" step="0.5" />
            </div>
            <div className="col-sm">
              Turn <input placeholder="0" type="number" step="0.5" />
            </div>
            <div className="col-sm">
              Energy Delta
              <input placeholder="0" type="number" step="0.5" />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md">
              Energy Per Turn
              <input placeholder="0" type="number" step="0.5" />
            </div>
            <div className="col-md">
              Damage Per Duration
              <input placeholder="0" type="number" step="0.5" />
            </div>
          </div>
        </div>
      );
      break;
    case "chargeMoveData":
      input = (
        <div className="container" style={{ color: "#48e08d" }}>
          <div className="row">
            <div class="col-sm">
              Base Power <input placeholder="0" type="number" step="0.5" />
            </div>
            <div class="col-sm">
              Charge Energy <input placeholder="0" type="number" step="0.5" />
            </div>
            <div class="col-sm">
              Damage Per Energy
              <input placeholder="0" type="number" step="0.5" />
            </div>
          </div>
          <br />
        </div>
      );
      break;
    case "input":
      input = (
        <input
          className={classes.Input}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
          step="0.5"
        />
      );
      break;
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {input}
    </div>
  );
};
export default input;
