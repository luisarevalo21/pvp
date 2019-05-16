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
    //FOR TESTING
    //change all fetches for localhost http://localhost:3036/pokemon :
    //FOR PRODUCTION
    //database: https://pvp-move-analysis.herokuapp.com/fastmoves
    fetch("http://localhost:3036/pokemon")
      // fetch("https://pvp-move-analysis.herokuapp.com/pokemon")

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
    // fetch("https://pvp-move-analysis.herokuapp.com/fastmoves")
    fetch("http://localhost:3036/fastmoves")
      .then(response => response.json())
      .then(response => this.setState({ quick_moves: response.data }))
      .catch(err => {
        console.log(err);
      });
    // fetch("https://pvp-move-analysis.herokuapp.com/chargemoves")
    fetch("http://localhost:3036/chargemoves")
      .then(response => response.json())
      .then(response => this.setState({ charge_moves: response.data }))
      .catch(err => {
        console.log(err);
      });
    // fetch("https://pvp-move-analysis.herokuapp.com/legacymoves")
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
    let pokemonNames = [];
    // console.log("the state of pokemon is", this.state.legacy_moves);
    if (this.state.pokemon) {
      pokemonNames = [...this.state.pokemon];
      pokemonNames.push(
        this.state.pokemon.map(element => {
          return { value: element.Pokemon, label: element.Pokemon };
        })
      );
    }

    if (this.state.selectedValue) {
      console.log("printing the value now", this.state.selectedValue);
      const data = this.state.pokemon.filter(
        element => element.pokemonName === this.state.selectedValue.value
      );
      console.log("this.state.legacy moves", this.state.legacy_moves);
      const selectedPokemon = this.state.legacy_moves.filter(element => {
        return element.pokemonName === this.state.selectedValue.value;
      });
      const legacy_moves = Object.values(selectedPokemon[0]);
      console.log("moves", legacy_moves);

      // const moves = props.legacyMoves.filter(element => {
      //   return element.moveName === copy.Pokemon;
      // });

      table = (
        <Table
          selectedPokemon={data}
          quickMoves={this.state.quick_moves}
          chargeMoves={this.state.charge_moves}
          legacyMoves={legacy_moves}
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
        pokemon={pokemonNames}
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
