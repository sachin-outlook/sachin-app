import React, { Component } from "react";

class Calculator extends Component {
  state = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    dot: ".",
    plus: "+",
    minus: "-",
    multiply: "*",
    divide: "/",
    equalto: "="
  };

  constructor() {
    super();
    this.state.currentValue = "";
    this.state.calculatedValue = "";
    this.state.currentOperand = "";
  }

  NANtoZero = value => {
    return isNaN(parseInt(value)) ? 0 : parseInt(value);
  };

  addValues = (currentValue, calculatedValue) => {
    return this.NANtoZero(currentValue) + this.NANtoZero(calculatedValue);
  };

  substractValues = (currentValue, calculatedValue) => {
    return this.NANtoZero(currentValue) - this.NANtoZero(calculatedValue);
  };

  multiplyValues = (currentValue, calculatedValue) => {
    return this.NANtoZero(currentValue) * this.NANtoZero(calculatedValue);
  };

  handleArithematic = e => {
    let { name } = e.target;
    let value = this.state[name];

    switch (value) {
      case "+":
        if (this.state.calculatedValue == "") {
          this.setState({ calculatedValue: this.state.currentValue });
          this.setState({ currentValue: "" });
          this.setState({ currentOperand: value });
        } else if (this.state.currentOperand === this.state.equalto) {
          this.setState({ currentValue: "" });
          this.setState({ currentOperand: this.state.plus });
        }
        console.log(name);
        break;

      case "-":
        if (this.state.calculatedValue === "") {
          this.setState({ calculatedValue: this.state.currentValue });
          this.setState({ currentValue: "" });
          this.setState({ currentOperand: value });
        }
        console.log(name);
        break;

      case "*":
        if (this.state.calculatedValue === "") {
          this.setState({ calculatedValue: this.state.currentValue });
          this.setState({ currentValue: "" });
          this.setState({ currentOperand: value });
        }
        console.log(name);
        break;

      case "/":
        if (this.state.calculatedValue === "") {
          this.setState({ calculatedValue: this.state.currentValue });
          this.setState({ currentValue: "" });
          this.setState({ currentOperand: value });
        }
        console.log(name);
        break;

      case "=":
        console.log(name);
        let { calculatedValue, currentValue } = this.state;
        calculatedValue = parseInt(calculatedValue);
        currentValue = parseInt(currentValue);

        let computedValue = calculatedValue + currentValue + "";
        console.log(calculatedValue, currentValue);

        this.setState({ currentValue: computedValue });
        this.setState({ calculatedValue: computedValue });
        this.setState({ currentOperand: this.state.equalto });

        break;

      default:
        console.log(name);
        break;
    }

    console.log(this.state.calculatedValue, this.state.currentValue);

    //this.setState({ calculatedValue: this.state.currentValue });
    //this.setState({ currentValue: "" });
  };

  handleAc = e => {
    this.setState({ currentValue: "" });
    this.setState({ calculatedValue: "" });
  };

  handleNumberClick = e => {
    let { name } = e.target;
    let value = this.state[name];
    let { currentValue } = this.state;

    if (currentValue.indexOf(".") >= 0 && value === ".") {
      console.log(currentValue.indexOf("."));
    } else {
      this.setState({ currentValue: currentValue + value });
      console.log(currentValue.indexOf("."));
    }

    console.log(name, value);
  };

  render() {
    return (
      <div className="container">
        <div className="calculator ">
          <h2 className="font-weight-bold text-center text-dark m-4">
            Sweety Calculator
          </h2>
          <input
            type="text"
            name="currentValue"
            className="calculator-screen z-depth-1"
            value={this.state.currentValue}
            readOnly={true}
          />

          <h3 className="font-weight-bold text-right text-dark m-4">
            {this.state.calculatedValue}
          </h3>

          <div className="calculator-keys">
            <button
              className="operator btn btn-info"
              name="plus"
              onClick={this.handleArithematic}
            >
              +
            </button>
            <button
              className="operator btn btn-info"
              name="minus"
              onClick={this.handleArithematic}
            >
              -
            </button>
            <button
              className="operator btn btn-info"
              name="multiply"
              onClick={this.handleArithematic}
            >
              &times;
            </button>
            <button
              className="operator btn btn-info"
              name="divide"
              onClick={this.handleArithematic}
            >
              &divide;
            </button>

            <button
              className="btn btn-light waves-effect"
              name="seven"
              onClick={this.handleNumberClick}
            >
              7
            </button>
            <button
              className="btn btn-light waves-effect"
              name="eight"
              onClick={this.handleNumberClick}
            >
              8
            </button>
            <button
              className="btn btn-light waves-effect"
              name="nine"
              onClick={this.handleNumberClick}
            >
              9
            </button>

            <button
              className="btn btn-light waves-effect"
              name="four"
              onClick={this.handleNumberClick}
            >
              4
            </button>
            <button
              className="btn btn-light waves-effect"
              name="five"
              onClick={this.handleNumberClick}
            >
              5
            </button>
            <button
              className="btn btn-light waves-effect"
              name="six"
              onClick={this.handleNumberClick}
            >
              6
            </button>

            <button
              className="btn btn-light waves-effect"
              name="one"
              onClick={this.handleNumberClick}
            >
              1
            </button>
            <button
              className="btn btn-light waves-effect"
              name="two"
              onClick={this.handleNumberClick}
            >
              2
            </button>
            <button
              className="btn btn-light waves-effect"
              name="three"
              onClick={this.handleNumberClick}
            >
              3
            </button>

            <button
              className="btn btn-light waves-effect"
              name="zero"
              onClick={this.handleNumberClick}
            >
              0
            </button>
            <button
              className="decimal function btn btn-secondary"
              name="dot"
              onClick={this.handleNumberClick}
            >
              .
            </button>
            <button
              className="all-clear function btn btn-danger btn-sm"
              value="all-clear"
              onClick={this.handleAc}
            >
              AC
            </button>

            <button
              className="equal-sign operator btn btn-default"
              name="equalto"
              onClick={this.handleArithematic}
            >
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
