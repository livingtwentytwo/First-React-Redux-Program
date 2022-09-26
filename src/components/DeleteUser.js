import React from "react";
import { connect } from "react-redux";
import { deleteUser } from "../actions";
import "./DeleteUser.css";


const DeleteUser = props => {
  return (
    <div className="list-section">
      <li className="list-item">{props.user}<button class="list-button" onClick={() => props.deleteUser(props.index)}>OK</button></li>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteUser: user => dispatch(deleteUser(user))
  };
};

export default connect(null, mapDispatchToProps)(DeleteUser);