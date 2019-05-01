import React, { Component } from "react";
import MoveData from "../../UI/MoveData/MoveData";
import Input from "../../UI/Input/Input";
import classes from "./MoveBuilder.module.css";
import Header from "../../UI/Header/Header";
import Table from "../../UI/Table/Table";
import axios from "../../axios";
import Spinner from "../../UI/Spinner/Spinner";
import QuickMoves from "../../QuickMoves";
import Pokemon from "../../Pokemon";

class MoveBuilder extends Component {
  state = {
    // pokemon: [
    //   {
    //     Pikachu: {
    //       quickMoves: {
    //         "Quick Attack": true,
    //         Present: true,
    //         Thundershock: true
    //       }
    //     }
    //   }
    // ],
    pokemon: null,
    selectedOption: null,
    quick_moves: null
  };
  //needs an id for later
  // moves: {
  //   Waterfall: {
  //     base_power: 12,
  //     duration: 2,
  //     energy_delta: 7,
  //     move_cooldown: 1.0
  //   },

  //   Counter: {
  //     base_power: 8,
  //     duration: 1,
  //     energy_delta: 7,
  //     move_cooldown: 1.0
  //   },

  //   Zen_Headbutt: {
  //     base_power: 8,
  //     duration: 2,
  //     energy_delta: 6,
  //     move_cooldown: 1.5
  //   }
  // },
  // Pokemon: {
  //   Raichu: {
  //     Thundershock: {
  //       base_power: 3,
  //       duration: 1.0,
  //       energy_delta: 9,
  //       move_cooldown: 1.0
  //     },

  //     Spark: {
  //       base_power: 4,
  //       duration: 1.0,
  //       energy_delta: 8,
  //       move_cooldown: 1.0
  //     },

  //     "Volt Switch": {
  //       base_power: 12,
  //       duration: 4.0,
  //       energy_delta: 10,
  //       move_cooldown: 2.5
  //     }
  //   },

  //   Pikachu: {
  //     Thundershock: {
  //       base_power: 3,
  //       duration: 1.0,
  //       energy_delta: 9,
  //       move_cooldown: 1.0
  //     },

  //     Spark: {
  //       base_power: 4,
  //       duration: 1.0,
  //       energy_delta: 8,
  //       move_cooldown: 1.0
  //     },

  //     "Volt Switch": {
  //       base_power: 12,
  //       duration: 4.0,
  //       energy_delta: 10,
  //       move_cooldown: 2.5
  //     }
  //   },
  //   Pichu: {},
  //   Charmander: {},
  //   Charizard: {}
  // }

  // displayedData: null

  // componentDidMount() {
  //   const pokemon = { ...this.state.Pokemon };
  //   axios
  //     .post("/pokemon.json", pokemon)
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  componentDidMount() {
    // axios
    //   .post("https://pvp-application.firebaseio.com/pokemon.json", Pokemon)
    //   .then(response => {
    //     console.log(response.data);
    //   });
    axios
      .get("https://pvp-application.firebaseio.com/pokemon.json")
      .then(response => {
        this.setState({ pokemon: response.data });
      });
    axios
      .get("https://pvp-application.firebaseio.com/quickMoves.json")
      .then(response => {
        console.log("the response is", response);
        this.setState({ quick_moves: response.data });
      });
  }

  handleChange = selectedOption => {
    console.log("printing the value now", selectedOption);
    this.setState({ selectedValue: selectedOption });
  };
  render() {
    let moveData = null;
    let table = null;
    const element = [];
    console.log("QUICK MOVES ARE", this.state.QuickMoves);

    console.log(this);
    if (this.state.pokemon) {
      console.log(this.state.pokemon);
      for (let key in this.state.pokemon) {
        element.push({ value: key, label: key });
      }

      // for (let keys in this.state.pokemon.data[key]) {
      //   console.log("the keys are", keys);
      // element.push({ value: keys, label: keys, id: key });
      // }
    }

    console.log("the elements are", element);
    if (this.state.selectedValue) {
      console.log("printing the value now", this.state.selectedValue);
      const data = this.state.pokemon[this.state.selectedValue.value];
      console.log("the data is", data);
      //create a table comoponent to pass the data
      //create a base table gathering the data and creating the table in the component
      moveData = (
        <MoveData
          name={this.state.selectedOption}
          duration={data.duration}
          basePower={data.base_power}
          energyDelta={data.energy_delta}
          moveCooldown={data.move_cooldown}
        />
      );
      table = <Table moves={data} moveStats={this.state.quick_moves} />;
    }
    // console.log("this.state.selctedvalue", this.state.selectedValue);

    // let form = <Spinner />;
    let form = (
      <Input
        inputType="select"
        selectedValue={this.state.selectedOption}
        moves={element}
        changed={this.handleChange}
      />
    );
    return (
      <div>
        <Header />
        <div className={classes.MoveBuilder}>{form}</div>
        {moveData}
        {table}
      </div>
    );
  }
}

export default MoveBuilder;
