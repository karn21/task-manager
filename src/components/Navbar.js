import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
import { Redirect } from "react-router-dom";

export class Navbar extends Component {
  handleLogout = () => {
    this.props.logout();
    // <Redirect to="/login"></Redirect>;
  };
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">
            {this.props.auth.isAuthenticated
              ? `Hello ${this.props.auth.user.username}`
              : ""}
          </a>

          <ul className="navbar-nav text-right">
            <li className="nav-item">
              <a
                className="nav-link text-white"
                style={{ cursor: "pointer" }}
                onClick={this.handleLogout}
              >
                Logout
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white " href="#">
                Features
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
