import React, { Component } from "react";
import Card from "../UI/Card/Card";
import classes from "./PokemonInformation.module.css";
import firebase from "../../Firebase";
// import * as firebase from "firebase";
import firestore from "firebase/firestore";

// import { resolve } from "url";

// const config = {
//   apiKey: "AIzaSyAZ1XB1wOKxFjUOwVMzsotBQyQJQXpoiS4",
//   authDomain: "pvp-application.firebaseapp.com",
//   databaseURL: "https://pvp-application.firebaseio.com",
//   projectId: "pvp-application",
//   storageBucket: "pvp-application.appspot.com",
//   messagingSenderId: "213303980815",
//   appId: "1:213303980815:web:3aac863d6659bb9e"
// };
// firebase.initializeApp(config);
const storage = firebase.storage().ref();

class PokemonInformation extends Component {
  state = {
    selected: "",
    pokemonName: ""
  };

  componentDidUpdate() {
    this.fetchImage();
    // if (
    //   !this.state.selected ||
    //   (this.state.selected && this.state.pokemonName !== this.props.pokemonName)
    // ) {
    //   console.log("this.props.pokemonName", this.props.pokemonName);
    //   const copy = { ...this.state };
    //   console.log("the copy is", copy);
    //   storage
    //     .child(`${this.props.pokemonName}.png`)
    //     .getDownloadURL()
    //     .then(url => {
    //       copy.selected = url;
    //       console.log("the copy is", copy);

    //       this.setState({
    //         selected: copy.selected,
    //         pokemonName: this.props.pokemonName
    //       });
    //     })
    //     .catch(error => {
    //       console.log(error);
    //       this.setState({
    //         selected: "no image to display",
    //         pokemonName: this.props.pokemonName
    //       });
    //       // Handle any errors
    //     });

    // console.log("this.props.pokemonName", this.props.pokemonName);
    // const copy = { ...this.state };
    // console.log("the copy is", copy);
    // storage
    //   .child(`${this.props.pokemonName}.png`)
    //   .getDownloadURL()
    //   .then(url => {
    //     copy.selected = url;
    //     console.log("the copy is", copy);
    //     this.setState({ selected: copy.selected });
    //   })
    //   .catch(error => {
    //     // Handle any errors
    //   });
  }
  componentDidMount() {
    this.fetchImage();
  }

  fetchImage = () => {
    if (
      !this.state.selected ||
      (this.state.selected && this.state.pokemonName !== this.props.pokemonName)
    ) {
      // console.log("this.props.pokemonName", this.props.pokemonName);
      const copy = { ...this.state };
      // console.log("the copy is", copy);
      storage
        .child(`${this.props.pokemonName}.png`)
        .getDownloadURL()
        .then(url => {
          copy.selected = url;
          // console.log("the copy is", copy);

          this.setState({
            selected: copy.selected,
            pokemonName: this.props.pokemonName
          });
        })
        .catch(error => {
          // console.log(error);
          storage
            .child(`pokeball.png`)
            .getDownloadURL()
            .then(url => {
              copy.selected = url;
              console.log("the copy is", copy);

              this.setState({
                selected: copy.selected,
                pokemonName: this.props.pokemonName
              });
            });
        });
    }
  };

  // componentDidUpdate() {
  //   const copy = { ...this.state };
  //   console.log("the copy is", copy);
  //   storage
  //     .child(`${copy.selected}.png`)
  //     .getDownloadURL()
  //     .then(url => {
  //       copy.selected = url;
  //       console.log("the copy is", copy);

  //       this.setState({ selected: copy.selected });
  //     })
  //     .catch(error => {
  //       // Handle any errors
  //     });
  // }
  // getImage(image) {}

  // componentDidMount() {
  //   let imageString = "";
  //   storage
  //     .child(`${Charizard}.png`)
  //     .getDownloadURL()
  //     .then(url => {
  //       imageString = url;
  //       this.setState({ image: imageString });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       // Handle any errors
  //     });
  // axios
  //   .get("gs://pvp-application.appspot.com/Charizard.png")
  //   .then(response => {
  //     console.log("response is", response.data);
  //   })
  //   .catch(error => console.log(error));

  render() {
    //   const imageSrc = require(`../../Pokemon/${props.pokemonName}.png`);
    //   imageSrc.onLoad();
    return (
      <div className={classes.PokemonInformation}>
        {/* <div class="row">
      <div class="col-sm">One of three columns</div>
      <div class="col-sm">{props.pokemonName}</div>
      <div class="col-sm">Dex #{props.pokemonNumber}</div>
    </div> */}
        {/* 
    <div className={classes.Row}>
      <img />
      <p> text</p>
      <p>{props.pokemonName}</p>
      <p>Dex #{props.pokemonNumber}</p>
    </div> */}

        {/* <Card title={props.pokemonName} body= {props.pokemonNumber}/> */}
        <div className="card" style={{ backgroundColor: "black" }}>
          <div className="card-body">
            <div className="card-text">
              <h3>{this.props.pokemonName}</h3>
              <p>Dex #{this.props.pokemonNumber}</p>
            </div>
          </div>
          {/* {checkImage(this.props.pokemonName)} */}

          {/* <image src={this.state.image} /> */}
          <img
            // style={{ width: "14rem" }}
            className={classes.Image}
            src={this.state.selected}
            alt="Pokemon Image"
            width="50px"
          />
        </div>
        {/* <div className={classes.Border}>
      <p>Type</p>
      <p>Weight</p>
      <p>Height</p>
    </div> */}
        {/* <div class="card w-25">
      <div class="card-body">
        <h5 class="card-title">Type</h5>
        <p class="card-text">here the typing will go </p>
      </div>
    </div>
    <div class="card w-25">
      <div class="card-body">
        <h5 class="card-title">Weight</h5>
        <p class="card-text">here the weight will go </p>
      </div>
    </div>
    <div class="card w-25">
      <div class="card-body">
        <h5 class="card-title">Height</h5>
        <p class="card-text">here the Height will go </p>
      </div>
    </div> */}

        <div className={classes.Row}>
          {/* <div className="row"> */}
          {/* <div style={{ flexDirection: "row", display: "flex" }}> */}

          <Card
            title="Type"
            body={this.props.typeOne + " " + this.props.typeTwo}
          />
          {/* <Card title="Weight" body="this is where the weight goes" />
      <Card title="Height" body="this is where the height goes" /> */}
          <div className="card" style={{ backgroundColor: "black" }}>
            <div className="card-header">
              Pokemon Max CP: {this.props.maxCP}
            </div>

            {/* <div className="card-title">2000</div> */}
            <div className="card-body">
              <div>Base HP: {this.props.hp}</div>
              <div>Base ATK: {this.props.atk}</div>
              <div>Base DEF: {this.props.def}</div>
            </div>
            {/* </div> */}
          </div>
        </div>

        {/* <div className="col-sm-8">
    <div className="card" style={{ backgroundColor: "black" }}>
      <div className="card-header">Pokemon Max CP: {props.maxCP}</div>

      <div className="card-title">2000</div>
      <div className="card-body">
        <div>Base HP: {props.hp}</div>
        <div>Base ATK: {props.atk}</div>
        <div>Base DEF: {props.def}</div>
      </div>
    </div> */}
        {/* </div> */}
        {/* <div class="row">
      <div class="col-sm-4"> */}
        {/* <div class="row">
    //   <div class="col-sm-4">
    //     <div className="card">
    //       <div className="card-body" />
    //       <h5 className="card-title">Height</h5>
    //       <p className="card-text">here the height will go</p>
    //     </div>
    //   </div>
    // </div> */}
      </div>
    );
  }
}

export default PokemonInformation;
