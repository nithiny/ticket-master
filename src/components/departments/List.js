import React, { Component } from "react";
import axios from "../../config/axios";
import DepartmentForm from "./Form";

export default class DepartmentList extends Component {
  state = {
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

  handleFormSubmit = formData => {
    axios
      .post("/departments", formData, {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        if (response.data.errors) {
          alert(response.data.message);
        } else {
          const department = response.data;
          this.setState(prevState => ({
            departments: [...prevState.departments, department]
            //[].concat(prevState.departments, department)
          }));
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleRemove = id => {
    axios
      .delete(`/departments/${id}`, {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        this.setState(prevState => ({
          departments: prevState.departments.filter(
            department => department._id !== id
          )
        }));
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h2>Listing Departments - {this.state.departments.length}</h2>
        <DepartmentForm handleFormSubmit={this.handleFormSubmit} />
        <ul>
          {this.state.departments.map(department => {
            return (
              <li key={department._id}>
                {department.name}{" "}
                <button
                  onClick={() => {
                    this.handleRemove(department._id);
                  }}
                >
                  remove
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
