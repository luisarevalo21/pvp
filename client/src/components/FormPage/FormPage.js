import React, { Component } from "react";
import classes from "./FormPage.module.css";
import Input from "../UI/Input/Input";
{
  /* <label for="exampleInputEmail1">Pokemon name</label>
        <input
          type="text"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter Pokemon Name"
        />
  */
}
// handleExtraQuickMove = () => {};
class FormPage extends Component {
  state = {
    // newPokemon: {
    //   pokemonName: null
    // },
    "Quick Move": {
      name: {
        value: "",
        label: "Quick Move Name",
        inputType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter Quick Move Name"
        }
      },
      basePower: {
        value: "",
        inputType: "input",
        label: "Base Power",
        elementConfig: {
          type: "number",
          placeholder: "0"
        }
      },
      duration: {
        value: "",
        inputType: "input",
        label: "Duration",
        elementConfig: {
          type: "number",
          placeholder: "0"
        }
      },
      energyGained: {
        value: "",
        inputType: "input",
        label: "Energy Gained",
        elementConfig: {
          type: "number",
          placeholder: "0"
        }
      },
      coolDown: {
        value: "",
        inputType: "input",
        label: "Cool Down",
        elementConfig: {
          type: "number",
          placeholder: "0"
        }
      },
      damagePerDuration: {
        value: "",
        inputType: "input",
        label: "Damage Per Duration",
        elementConfig: {
          type: "number",
          placeholder: "0"
        }
      },
      energyPerDuration: {
        value: "",
        inputType: "input",
        label: "Energy Per Duration",
        elementConfig: {
          type: "number",
          placeholder: "0"
        }
      }
    },
    "Charge Move": {
      name: {
        value: "",
        label: "Charge Move Name",
        inputType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter Charge Move Name"
        }
      },
      basePower: {
        value: "",
        inputType: "input",
        label: "Base Power",
        elementConfig: {
          type: "number",
          placeholder: "0"
        }
      },
      chargeEnergy: {
        value: "",
        label: "Charge Energy",
        inputType: "input",
        elementConfig: {
          type: "number",
          placeholder: "0"
        }
      },
      damagePerEnergy: {
        value: "",
        label: "Damage Per Energy",
        inputType: "input",
        elementConfig: {
          type: "number",
          placeholder: "0"
        }
      }
    }
  };

  //submit charge moves only for now
  //figure out the id of which input was seelcted
  //like the contact data example

  handleChange = (event, key, value) => {
    console.log("the key is", value);
    let copyState = null;
    let updatedElementState = null;

    switch (value) {
      case "Charge Move":
        copyState = { ...this.state["Charge Move"] };
        console.log("the copy state is ", copyState);
        updatedElementState = { ...copyState[key] };
        console.log("THE UPDATE ELEEMTN STATE IS", updatedElementState);
        updatedElementState.value = event.target.value;
        copyState[key] = updatedElementState;
        this.setState({ ["Charge Move"]: copyState });
        break;

      case "Quick Move":
        copyState = { ...this.state["Quick Move"] };
        console.log("the copy state is ", copyState);
        updatedElementState = { ...copyState[key] };
        console.log("THE UPDATE ELEEMTN STATE IS", updatedElementState);
        updatedElementState.value = event.target.value;
        copyState[key] = updatedElementState;
        this.setState({ ["Quick Move"]: copyState });
        break;
    }
    // if (value === "Charge Move") {

    // case "Quick Move":
    //   copyState = { ...this.state["Quick Move"] };
    //   updatedElementState = { ...copyState[key] };
    //   updatedElementState.value = event.target.value;
    //   copyState[key] = updatedElementState;
    //   this.setState({ newChargeMove: copyState });

    // break;

    // if (value === "Quick Move") {

    // }
  };
  handleSubmit = (event, value) => {
    event.preventDefault();
    const copyObject = this.state[value];
    console.log("new charge move is", copyObject);

    switch (value) {
      case "Charge Move":
        fetch(
          `https://pvp-move-analysis.herokuapp.com/chargemoves/add?chargeMoveName=${
            // `http://localhost:3036/chargemoves/add?chargeMoveName=${
            copyObject.name.value
          }&basePower=${copyObject.basePower.value}&energy=${
            copyObject.chargeEnergy.value
          }&damagePerEnergy=${copyObject.damagePerEnergy.value}`
        )
          .then(response => {
            console.log("the response is", response);
          })
          .then(response => this.props.history.push("/"))
          .catch(err => {
            console.log(err);
          });
        break;
      case "Quick Move":
        // duration, energyGained, coolDown, damagePerDuration, energyPerDuration;
        fetch(
          `https://pvp-move-analysis.herokuapp.com/fastmoves/add?chargeMoveName=${
            // `http://localhost:3036/fastmoves/add?fastMoveName=${
            copyObject.name.value
          }&basePower=${copyObject.basePower.value}&duration=${
            copyObject.duration.value
          }&energyGained=${copyObject.energyGained.value}&coolDown=${
            copyObject.coolDown.value
          }&damagePerDuration=${
            copyObject.damagePerDuration.value
          }&energyPerDuration=${copyObject.energyPerDuration.value}`
        )
          .then(response => {
            console.log("the response is", response);
          })
          .then(response => this.props.history.push("/"))
          .catch(err => {
            console.log(err);
          });
        break;
    }
  };
  render() {
    console.log("the option is ", this.props.selectedOption);
    const s = this.props.selectedOption.value;
    console.log("s is", this.state[s]);
    const array = [];

    for (let key in this.state[s]) {
      array.push({ id: key, config: this.state[s][key] });
    }
    console.log("the array is ", array);
    let form = null;
    console.log("inside the switch");
    switch (this.props.selectedOption.value) {
      // case "Pokemon":
      //   form = (
      //     <form className={classes.FormPage}>
      //       <div className="form-group">
      //         <Input
      //           inputType="pokemon"
      //           label="Enter Pokemon Name"
      //           placeholder="Enter Pokemon Name"
      //           className="form-control"
      //           change={event => this.handleChange(event)}
      //         />
      //       </div>

      //       <div className="form-group" style={{ border: "white solid 1px" }}>
      //         <Input
      //           inputType="pokemon"
      //           label="Enter Quick Move Name"
      //           placeholder="Enter Quick Move"
      //           className="form-control"
      //         />
      //         <Input inputType="quickMoveData" className="form-control" />
      //       </div>
      //       <div className="form-group" style={{ border: "white solid 1px" }}>
      //         <Input
      //           inputType="pokemon"
      //           label="Enter Quick Move Name"
      //           placeholder="Enter Quick Move"
      //           className="form-control"
      //         />
      //         <Input inputType="quickMoveData" className="form-control" />
      //       </div>

      //       {/* <button onClick={this.handleExtraQuickMove}>Add a quick move</button> */}
      //       <div className="form-group" style={{ border: "white solid 1px" }}>
      //         <Input
      //           inputType="pokemon"
      //           label="Enter Charge Move Name"
      //           placeholder="Enter charge move name"
      //           className="form-control"
      //         />
      //         <Input inputType="chargeMoveData" className="form-control" />
      //       </div>
      //       <div className="form-group" style={{ border: "white solid 1px" }}>
      //         <Input
      //           inputType="pokemon"
      //           label="Enter Charge Move Name"
      //           placeholder="Enter charge move name"
      //           className="form-control"
      //         />
      //         <Input inputType="chargeMoveData" className="form-control" />
      //       </div>
      //       <div className="form-group" style={{ border: "white solid 1px" }}>
      //         <Input
      //           inputType="pokemon"
      //           label="Enter Charge Move Name"
      //           placeholder="Enter charge move name"
      //           className="form-control"
      //           changed={event => this.handleChange(event)}
      //         />
      //         <Input inputType="chargeMoveData" className="form-control" />
      //       </div>
      //     </form>
      //   );
      //   break;
      case "Quick Move":
        form = (
          <form
            className={classes.FormPage}
            onSubmit={event =>
              this.handleSubmit(event, this.props.selectedOption.value)
            }
          >
            {/* <div className="form-group" style={{ border: "white solid 1px" }}>
              <Input
                inputType="pokemon"
                label="Enter Quick Move Name"
                placeholder="Enter Quick Move"
                className="form-control"
              />
              <Input inputType="quickMoveData" className="form-control" />
            </div> */}
            {array.map(element => (
              <Input
                key={element.id}
                inputType={element.config.inputType}
                label={element.config.label}
                value={element.config.value}
                elementConfig={element.config.elementConfig}
                changed={event =>
                  this.handleChange(
                    event,
                    element.id,
                    this.props.selectedOption.value
                  )
                }
              />
            ))}
            <button className="btn btn-primary">Submit</button>
          </form>
        );
        break;
      case "Charge Move":
        form = (
          <form
            className={classes.FormPage}
            onSubmit={event =>
              this.handleSubmit(event, this.props.selectedOption.value)
            }
          >
            {array.map(element => (
              <Input
                key={element.id}
                inputType={element.config.inputType}
                label={element.config.label}
                value={element.config.value}
                elementConfig={element.config.elementConfig}
                changed={event =>
                  this.handleChange(
                    event,
                    element.id,
                    this.props.selectedOption.value
                  )
                }
              />
            ))}
            <button className="btn btn-primary">Submit</button>
          </form>
        );

        // form = (
        //   <form className={classes.FormPage}>
        //     <div className="form-group" style={{ border: "white solid 1px" }}>
        //       <Input
        //         inputType="pokemon"
        //         label="Enter Charge Move Name"
        //         placeholder="Enter charge move name"
        //         className="form-control"
        //       />
        //       <Input
        //         inputType="chargeMoveData"
        //         className="form-control"
        //         change={this.handleChange}
        //       />
        //     </div>
        //   </form>
        // );
        break;

      default:
        form = <div>hello world</div>;
    }
    return (
      <div className={classes.Input}>
        {/* <h1>Hello from form page</h1> */}
        {form}
      </div>
    );
  }

  // {
  //   /* <div className="container" style={{ border: "2px solid red" }}>
  //       <div className="row">
  //         <div class="col-sm">
  //           Base Power <input placeholder="0" type="number" step="0.5" />
  //         </div>
  //         <div class="col-sm">
  //           Turn <input placeholder="0" type="number" step="0.5" />
  //         </div>
  //         <div class="col-sm">
  //           Energy Delta
  //           <input placeholder="0" type="number" step="0.5" />
  //         </div>
  //       </div>
  //       <br />
  //       <div className="row">
  //         <div class="col-md">
  //           Energy Per Turn <input placeholder="0" type="number" step="0.5" />
  //         </div>
  //         <div class="col-md">
  //           Damage Per Duration{" "}
  //           <input placeholder="0" type="number" step="0.5" />
  //         </div>
  //       </div> */
  // }
  // {
  //   /* <label>Turn</label>
  //         <input placeholder="text" />

  //         <label>Energy Delta </label>
  //         <input placeholder="Turn" />
  //       </div> */
  // }
  // {
  //   /* <div className="row">
  //         <label>Energy Per Turn </label>
  //         <input placeholder="Turn" />
  //         <label>Energy Per Turn </label>
  //         <input placeholder="Turn" />
  //         <label>Energy Per Turn </label>
  //         <input placeholder="Turn" />
  //       </div> */
  // }
  // {
  //   /* </div> */
  // }
}

export default FormPage;
