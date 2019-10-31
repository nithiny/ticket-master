import React, { Component } from "react";
import axios from "../../config/axios";
import CustomerForm from "./Form";

export default class CustomerNew extends Component {
  handleCustomerSubmit = customer => {
    axios
      .post("/customers", customer, {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        if (response.data.errors) {
          console.log("validation error", response.data.errors);
        } else {
          console.log("success", response.data);
          this.props.history.push("/customers");
        }
      });
  };

  render() {
    return (
      <div>
        <h2>Add Customer</h2>
        <CustomerForm handleCustomerSubmit={this.handleCustomerSubmit} />
      </div>
    );
  }
}
