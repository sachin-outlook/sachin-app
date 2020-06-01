import React, { Component } from "react";

class Product extends Component {
  //   state = { count: this.props.value.value, id: this.props.value.id };

  handleIncrement = () => {
    // this.setState({ count: this.state.count + 1 });
  };

  resetValue = () => {
    // this.setState({ count: 0 });
  };
  render() {
    console.log(this.props.children);

    return (
      <div className="container m-2">
        {this.props.children}
        <div className="row">
          <div className="col-md-4">
            <div className="badge badge-success">
              {this.props.counter.value}
            </div>
          </div>
          <div className="col-md-4">
            <button
              className="btn btn-primary btn-sm"
              onClick={() => this.props.onIncrement(this.props.counter)}
            >
              Increment
            </button>
          </div>
          <div className="col-md-2">
            <button
              className="btn btn-primary btn-sm"
              onClick={() => this.props.onReset(this.props.counter)}
            >
              Reset
            </button>
          </div>
          <div className="col-md-2">
            <button
              className="btn btn-primary btn-sm"
              onClick={() => this.props.onDelete(this.props.counter)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
