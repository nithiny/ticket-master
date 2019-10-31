import React from "react";
import { Link } from "react-router-dom";

export default function CustomerItem(props) {
  const { id, index, name, email, mobile } = props;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <Link to={`/customers/${id}`}>{name}</Link>
      </td>
      <td>{email}</td>
      <td>{mobile}</td>
      <td>show</td>
      <td>
        <button
          onClick={() => {
            props.handleRemove(id);
          }}
        >
          remove
        </button>
      </td>
    </tr>
  );
}
