import React, { Component, Fragment } from "react";

class Parent extends Component {
  state = { forms: { fname: "sachin" }, status: "welldone" };

  constructor() {
    super();
    //super(props);
    this.state.forms.fname = "Alok";
    //this.setState({ fname: this.state.fname });
    console.log("Parent", "  Constructor");
  }

  componentDidMount() {
    console.log("Parent", " Mounted");
  }

  componentWillUnmount() {
    console.log("Parent", " Will UnMount");
  }

  handleChange = event => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState(
      prevValue => {
        return { forms: { ...prevValue.forms, fname: value } };
      },
      () => console.log(JSON.stringify(this.state))
    );
  };

  render() {
    console.log("Parent", " Render");
    return (
      <Fragment>
        <p> Parent Component</p>
        <p>Hello {this.state.forms.fname}</p>
        <input type="text" onChange={this.handleChange} name="fname" />
        <button> Check loading</button>
      </Fragment>
    );
  }
}

export default Parent;
