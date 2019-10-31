import React, { Component } from "react";
import axios from "../../config/axios";
import EmployeeForm from "./Form";

export default class EmployeeNew extends Component {
  handleEmployeeSubmit = employee => {
    axios
      .post("/employees", employee, {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        if (response.data.errors) {
          console.log("validation error", response.data.errors);
        } else {
          console.log("success", response.data);
          this.props.history.push("/employees");
        }
      });
  };

  render() {
    return (
      <div>
        <h2>Add Employee</h2>
        <EmployeeForm handleEmployeeSubmit={this.handleEmployeeSubmit} />
      </div>
    );
  }
}
