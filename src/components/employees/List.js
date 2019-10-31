import React, { Component } from "react";
import axios from "../../config/axios";
import { Link } from "react-router-dom";
import {Table} from "reactstrap"

export default class EmployeeList extends Component {
  state = {
    employees: []
  };

  componentDidMount() {
    axios
      .get("/employees", {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        const employees = response.data;
        this.setState({
          employees
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h2>Listing Employees - {this.state.employees.length}</h2>

        <Table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>email</th>
              <th>mobile</th>
              <th>department</th>
              <th>actions</th>
            </tr>
          </thead>

          <tbody>
            {this.state.employees.map((employee, index) => {
              return (
                <tr key={employee._id}>
                  <td>{index + 1}</td>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.mobile}</td>
                  <td>{employee.department.name}</td>
                  <td>show</td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        <Link to="/employees/new">Add Employee</Link>
      </div>
    );
  }
}
