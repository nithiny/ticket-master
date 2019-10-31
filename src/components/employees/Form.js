import React, { Component } from "react";
import axios from "../../config/axios";

export default class EmployeeForm extends Component {
  state = {
    name: "",
    email: "",
    mobile: "",
    department: "",
    departments: []
  };

  componentDidMount() {
    axios
      .get("/departments", {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        const departments = response.data;
        this.setState({
          departments
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const formData = {
      name: this.state.name,
      email: this.state.email,
      mobile: this.state.mobile,
      department: this.state.department
    };
    console.log(formData);
    this.props.handleEmployeeSubmit(formData);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
            />
          </label>{" "}
          <br />
          <label>
            Email
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
            />
          </label>{" "}
          <br />
          <label>
            Mobile
            <input
              type="text"
              value={this.state.mobile}
              onChange={this.handleChange}
              name="mobile"
            />
          </label>
          <label>
            Department
            <select
              value={this.state.department}
              onChange={this.handleChange}
              name="department"
            >
              <option value="">--select--</option>
              {this.state.departments.map(department => {
                return (
                  <option key={department._id} value={department._id}>
                    {department.name}
                  </option>
                );
              })}
            </select>
          </label>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
