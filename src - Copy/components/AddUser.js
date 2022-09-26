import React from "react";
import { connect } from "react-redux";
import { createUser } from "../actions";
import "../AddUser.css";

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  addUser() {
    this.props.addNewUser(this.state.input);
    this.setState({
      input: ''
    });
  }

  render() {
    return (
      <div>
        <input className="input-field" value={this.state.input} onChange={this.handleChange} />
        <button className="input-button" onClick={this.addUser}>ADD</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewUser: (user) => {
      dispatch(createUser(user))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddUser)