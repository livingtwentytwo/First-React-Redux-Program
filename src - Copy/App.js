import React from "react";
import { connect } from "react-redux";
import "./App.css";
import AddUser from "./components/AddUser";
import DeleteUser from "./components/DeleteUser";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const userList = this.props.users.map((user, index) => (
      <DeleteUser user={user} index={index} />
    ));

    return (
      <div className="App-header">
        <h2>Common PC Queue</h2>
        <AddUser /> <br />
        {userList}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { users: state.user };
}

export default connect(mapStateToProps)(Main);