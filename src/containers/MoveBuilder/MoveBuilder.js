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
    pokemon: [],
    selectedOption: null,
    quick_moves: [],
    charge_moves: [],
    legacy_moves: []
  };

  componentDidMount() {
    fetch("http://localhost:3036/pokemon")
      .then(response => response.json())
      .then(response => {
        let pokemon = {};

        // console.log("the data is", response.data);
        pokemon = response.data.map(element => {
          let pokemonData = {};

          for (let key in element) {
            if (element[key] !== null) {
              pokemonData[key] = element[key];
              // console.log("element key", element[key]);
              // const element = element[key];
              // pokemonNames.push({ element: 5 });
            }
            // console.log(key);
          }
          return pokemonData;
          // console.log("element is", pokemonNames);
        });
        // console.log("pokemon names are", pokemon);
        this.setState({ pokemon: pokemon });
        // let copy = { ...response.data };
        // console.log(copy);
        // for (let key in copy) {
        //   console.log("the key is ", key);
        //   if (key !== null) {
        //     pokemonNames[key] = response.data[key];
        //   }
        // }

        // this.setState({ pokemon: pokemonNames });
      })
      .catch(err => {
        console.log("the error is ", err);
      });
    fetch("http://localhost:3036/fastmoves")
      .then(response => response.json())
      .then(response => this.setState({ quick_moves: response.data }))
      .catch(err => {
        console.log(err);
      });
    fetch("http://localhost:3036/chargemoves")
      .then(response => response.json())
      .then(response => this.setState({ charge_moves: response.data }))
      .catch(err => {
        console.log(err);
      });
    fetch("http://localhost:3036/legacymoves")
      .then(response => response.json())
      .then(response => this.setState({ legacy_moves: response.data }))
      .catch(err => {
        console.log(err);
      });

    // this.getData();
    // axios
    //   .post("https://pvp-application.firebaseio.com/pokemon.json", Pokemon)
    //   .then(response => {
    //     console.log(response.data);
    //   });
    // axios
    //   .get("https://pvp-application.firebaseio.com/pokemon.json")
    //   .then(response => {
    //     this.setState({ pokemon: response.data });
    //   });
    // axios
    //   .get("https://pvp-application.firebaseio.com/quickMoves.json")
    //   .then(response => {
    //     console.log("the response is", response);
    //     this.setState({ quick_moves: response.data });
    //   });
  }

  getData = _ => {
    // axios
    //   .get("https://localhost:3036/products")
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(err => {
    //     console.log("the erros is", err);
    //   });
    // fetch("http://localhost:3036/products")
    //   .then(response => response.json())
    //   .then(response => this.setState({ pokemon: response.data }))
    //   .catch(err => {
    //     console.log("the error is ", err);
    //   });
  };
  handleChange = selectedOption => {
    // console.log("printing the value now", selectedOption);
    this.setState({ selectedValue: selectedOption });
  };

  render() {
    let table = null;
    let element = [];
    // console.log("the state of pokemon is", this.state.pokemon);
    if (this.state.pokemon) {
      element = [...this.state.pokemon];
      element.push(
        this.state.pokemon.map(element => {
          return { value: element.Pokemon, label: element.Pokemon };
        })
      );
    }

    if (this.state.selectedValue) {
      console.log("printing the value now", this.state.selectedValue);
      const data = this.state.pokemon.filter(
        element => element.Pokemon === this.state.selectedValue.value
      );

      table = (
        <Table
          selectedPokemon={data}
          quickMoves={this.state.quick_moves}
          chargeMoves={this.state.charge_moves}
          legacyMoves={this.state.legacy_moves}
        />
      );
    }
    // console.log("this.state.selctedvalue", this.state.selectedValue);

    // // let form = <Spinner />;
    // console.log(element);
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
        <div className={classes.MoveBuilder}>
          {form}
          {/* <div style={{ color: "white" }}> </div> */}
          {/* {moveData} */}
          {table}
        </div>
      </div>
    );
  }
}

export default MoveBuilder;
