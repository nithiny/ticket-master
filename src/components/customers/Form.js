import React, { Component } from "react";

export default class CustomerForm extends Component {
  state = {
    name: "",
    email: "",
    mobile: ""
  };

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
      mobile: this.state.mobile
      // id: this.props.customer._id
    };

    // we want to create an id property only while editing and not creating a user, this is determined based on if the component has recieved a customer prop
    this.props.customer && (formData.id = this.props.customer._id);

    console.log(formData);
    this.props.handleCustomerSubmit(formData);
  };

  componentWillReceiveProps(nextProps) {
    console.log("form customer will receive props", nextProps);
    const { name, email, mobile } = nextProps.customer;
    this.setState({ name, email, mobile });
  }

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
          <input type="submit" />
        </form>
      </div>
    );
  }
}
