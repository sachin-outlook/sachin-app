import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Product from "./productComponent";

class Counter extends Component {
  state = {
    counters: [
      { id: 1, value: 90 },
      { id: 2, value: 10 },
      { id: 3, value: 11 }
    ]
  };

  childCall = data => {
    console.log("child call", data);
  };

  onReset = counter => {
    let { counters } = this.state;
    let index = counters.indexOf(counter);
    counters[index].value = 0;
    this.setState({ counters });
  };

  onIncrement = counter => {
    console.log(counter);
    let { counters } = this.state;
    let index = counters.indexOf(counter);
    counters[index].value += 1;
    this.setState({ counters });
  };

  handleDelete = counter => {
    let { counters } = this.state;
    let index = counters.indexOf(counter);
    counters.splice(index, 1);

    this.setState({ counters: counters });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 mt-5 mx-auto mt-5">
            {this.state.counters.length > 0 &&
              this.state.counters.map(counter => (
                <Product
                  key={counter.id}
                  counter={counter}
                  childCall={this.childCall}
                  onDelete={this.handleDelete}
                  onIncrement={this.onIncrement}
                  onReset={this.onReset}
                >
                  PRODUCT NO : #{counter.id}
                </Product>
              ))}
            {/* <Product></Product> */}
            {/* <div class="card">
              <div class="card-body">
                <h5 class="card-title">Hello World</h5>
                <p class="card-text">Counter Value : {this.state.count}</p>
                <a class="btn btn-primary" onClick={this.handleIncrement}>
                  Increment
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
