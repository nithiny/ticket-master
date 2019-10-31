import React, { Component } from "react";
import axios from "../../config/axios";
import { Link } from "react-router-dom";
import CustomerItem from "./Item";
import { Table } from "reactstrap";

export default class CustomersList extends Component {
  state = {
    customers: []
  };

  componentDidMount() {
    axios
      .get("/customers", {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        const customers = response.data;
        this.setState({
          customers
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleRemove = id => {
    axios
      .delete(`/customers/${id}`, {
        headers: {
          "x-auth": localStorage.getItem("token")
        }
      })
      .then(response => {
        this.setState(prevState => ({
          customers: prevState.customers.filter(customer => customer._id !== id)
        }));
      })
      .catch(err => {});
  };

  render() {
    return (
      <div>
        <h2>Listing Customers - {this.state.customers.length}</h2>

        <Table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>email</th>
              <th>mobile</th>
              <th>actions</th>
            </tr>
          </thead>

          <tbody>
            {this.state.customers.map((customer, index) => {
              return (
                <CustomerItem
                  key={customer._id}
                  id={customer._id}
                  index={index}
                  name={customer.name}
                  email={customer.email}
                  mobile={customer.mobile}
                  handleRemove={this.handleRemove}
                />
              );
            })}
          </tbody>
        </Table>

        <Link to="/customers/new">Add Customer</Link>
      </div>
    );
  }
}
