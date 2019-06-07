import React from "react";
import Card from "../UI/Card/Card";
import classes from "./PokemonInformation.module.css";
const pokemonInformation = props => {
  function checkImage(variable) {
    // console.log("the variable is ", variable);
    // let myImage = new Image();
    try {
      let url_image = require("../../Pokemon/" + variable + ".png");
      return (
        <img
          style={{ width: "14rem" }}
          className={classes.Image}
          src={url_image}
          //   width="50px"
        />
      );
    } catch {
      return <p>No image</p>;
    }
  }
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
            <h3>{props.pokemonName}</h3>
            <p>Dex #{props.pokemonNumber}</p>
          </div>
        </div>
        {checkImage(props.pokemonName)}
        {/* <img
          // style={{ width: "14rem" }}
          className={classes.Image}
          src={imageSrc}
          alt="Pokemon Image"
          width="50px"
        /> */}
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

        <Card title="Type" body={props.typeOne + " " + props.typeTwo} />
        {/* <Card title="Weight" body="this is where the weight goes" />
      <Card title="Height" body="this is where the height goes" /> */}
        <div className="card" style={{ backgroundColor: "black" }}>
          <div className="card-header">Pokemon Max CP: {props.maxCP}</div>

          {/* <div className="card-title">2000</div> */}
          <div className="card-body">
            <div>Base HP: {props.hp}</div>
            <div>Base ATK: {props.atk}</div>
            <div>Base DEF: {props.def}</div>
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
};

export default pokemonInformation;
