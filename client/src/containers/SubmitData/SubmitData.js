import React, { Component } from "react";
import Header from "../../components/UI/Header/Header";
import Input from "../../components/UI/Input/Input";
import FormPage from "../../components/FormPage/FormPage";
import { Route } from "react-router-dom";

class SubmitData extends Component {
  state = {
    options: [
      { value: "Pokemon", label: "Pokemon" },
      { value: "Quick Move", label: "Quick Move" },
      { value: "Charge Move", label: "Charge Move" }
    ],
    selectedOption: null
  };

  handleChange = selectedOption => {
    console.log("printing the value now", selectedOption);
    this.setState({ selectedOption });
    this.props.history.replace("/submit/formpage");
  };

  // handleSubmit(e) {}
  render() {
    console.log("hello from submit data");
    // let form = null;
    // if (this.state.selectedOption) {
    //   // <Route
    //   //   path={this.props.match.url + "/formpage"}
    //   //   render={props => (
    //   //     <FormPage
    //   //       // ingredients={this.state.ingredients}
    //   //       // price={this.state.totalPrice}
    //   //       {...props}
    //   //     />
    //   //   )}
    //   // />;
    //   // form = (
    //   //   <FormPage
    //   //     selectedOption={this.state.selectedOption.value}
    //   //     submit={this.handleSubmit}
    //   //     change={this.handleInputChanged}
    //   //   />
    //   // );
    //   console.log("selected vlaue was pressed");
    // }
    return (
      <div>
        <Header header="Submit an Entry" />
        <Input
          inputType="select"
          options={this.state.options}
          label="Select an option"
          changed={this.handleChange}
          selectedValue={this.state.selectedOption}
        />
        {/* {form} */}
        <Route
          path={this.props.match.url + "/formpage"}
          render={props => (
            <FormPage
              selectedOption={this.state.selectedOption}
              // price={this.state.totalPrice}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default SubmitData;
