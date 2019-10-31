import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import CustomersList from "./components/customers/List";
import CustomerNew from "./components/customers/New";
import CustomerShow from "./components/customers/Show";
import CustomerEdit from "./components/customers/Edit";

import DepartmentList from "./components/departments/List";
import EmployeeList from "./components/employees/List";
import EmployeeNew from "./components/employees/New";

import TicketsFrom from "./components/tickets/Form"



function App() {
  return (
    <BrowserRouter>
      <div>
        <h2>Ticket Manager</h2>
        <Link to="/">Home</Link>
        <Link to="/customers">Customers</Link>
        <Link to="/departments">Departments</Link>
        <Link to="/employees">Employees</Link>
        <Link to = "/tickets">Tickets</Link>

        <Switch>
          <Route path="/customers" component={CustomersList} exact={true} />
          <Route path="/customers/new" component={CustomerNew} />
          <Route path="/customers/edit/:id" component={CustomerEdit} />
          <Route path="/customers/:id" component={CustomerShow} />
          <Route path="/departments" component={DepartmentList} />
          <Route path="/employees" component={EmployeeList} exact={true} />
          <Route path="/employees/new" component={EmployeeNew} />

          <Route path ="/tickets" component={TicketsFrom} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
