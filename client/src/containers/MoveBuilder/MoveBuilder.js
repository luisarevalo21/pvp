import React, { Component } from "react";
import Input from "../../components/UI/Input/Input";
import classes from "./MoveBuilder.module.css";
import Table from "../../components/UI/Table/Table";
import Spinner from "../../components/UI/Spinner/Spinner";
import MewTable from "../../components/UI/MewTable/MewTable";
import Toolbar from "../../components/UI/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/UI/Navigation/SideDrawer/SideDrawer";
import Header from "../../components/UI/Header/Header";

class MoveBuilder extends Component {
  state = {
    pokemon: [],
    selectedOption: null,
    quick_moves: [],
    charge_moves: [],
    legacy_moves: [],
    mew_data: []
  };

  // sideDrawerClosed = () => {
  //   this.setState({ showSideDrawer: false });
  // };
  // sideDrawerToggleHandler = () => {
  //   this.setState(prevState => {
  //     return { showSideDrawer: !prevState.showSideDrawer };
  //   });
  // };

  componentDidMount() {
    //FOR TESTING
    //change all fetches for localhost http://localhost:3036/pokemon :
    //FOR PRODUCTION
    //database: https://pvp-move-analysis.herokuapp.com/fastmoves
    // fetch("http://localhost:3036/pokemon")
    fetch("https://pvp-move-analysis.herokuapp.com/pokemon")
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
    fetch("https://pvp-move-analysis.herokuapp.com/fastmoves")
      // fetch("http://localhost:3036/fastmoves")
      .then(response => response.json())
      .then(response => this.setState({ quick_moves: response.data }))
      .catch(err => {
        console.log(err);
      });
    fetch("https://pvp-move-analysis.herokuapp.com/chargemoves")
      // fetch("http://localhost:3036/chargemoves")
      .then(response => response.json())
      .then(response => this.setState({ charge_moves: response.data }))
      .catch(err => {
        console.log(err);
      });
    fetch("https://pvp-move-analysis.herokuapp.com/legacymoves")
      // fetch("http://localhost:3036/legacymoves")
      .then(response => response.json())
      .then(response => this.setState({ legacy_moves: response.data }))
      .catch(err => {
        console.log(err);
      });
    fetch("https://pvp-move-analysis.herokuapp.com/mewtable")
      // fetch("http://localhost:3036/mewtable")
      .then(response => response.json())
      .then(response => this.setState({ mew_data: response.data }))
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
    // console.log("the state of pokemon is", this.state.quick_moves);
    if (this.state.pokemon) {
      pokemonNames = [...this.state.pokemon];
      pokemonNames.push(
        this.state.pokemon.map(element => {
          return { value: element.Pokemon, label: element.Pokemon };
        })
      );
    }

    if (this.state.selectedValue) {
      if (this.state.selectedValue.value === "Mew") {
        table = (
          <MewTable
            selectedPokemon={this.state.mew_data}
            quickMoves={this.state.quick_moves}
            chargeMoves={this.state.charge_moves}
          />
        );
        console.log("mew was pressed");
      } else {
        let legacy_moves = [];
        // console.log("printing the value now", this.state.selectedValue);
        const data = this.state.pokemon.filter(
          element => element.pokemonName === this.state.selectedValue.value
        );

        // console.log("this.states.selected value", this.state.selectedValue);
        // console.log("this.state.legacy moves", this.state.legacy_moves);
        const selectedPokemon = this.state.legacy_moves.filter(element => {
          return element.pokemonName === this.state.selectedValue.value;
        });
        if (selectedPokemon.length !== 0) {
          // console.log("seleted pokemon", selectedPokemon);
          legacy_moves = Object.values(selectedPokemon[0]);
          // console.log("moves", legacy_moves);
        }

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
    }
    // console.log("this.state.selctedvalue", this.state.selectedValue);

    // // let form = <Spinner />;
    // console.log(element);
    const options = this.state.pokemon.map(element => {
      return { value: element.pokemonName, label: element.pokemonName };
    });
    let form = (
      <Input
        inputType="select"
        selectedValue={this.state.selectedOption}
        options={options}
        label="Select a Pokemon"
        // pokemon={pokemonNames}
        changed={this.handleChange}
      />
    );
    return (
      // <div className="container">
      //   <Toolbar drawerToggledClicked={this.sideDrawerToggleHandler} />
      //   <SideDrawer
      //     closed={this.sideDrawerClosed}
      //     open={this.state.showSideDrawer}
      //   />
      <div>
        <Header header="PVP Move Analysis" />
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
