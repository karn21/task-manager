import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  handleLogout = () => {
    this.props.logout();
  };
  render() {
    const authenticatedOptions = (
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
      </ul>
    );

    const options = (
      <ul className="navbar-nav text-right">
        <li className="nav-item">
          <Link to="/login">
            <a className="nav-link text-white" style={{ cursor: "pointer" }}>
              Login
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register">
            <a className="nav-link text-white " href="#">
              Register
            </a>
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">
            {this.props.auth.isAuthenticated
              ? `Hello ${this.props.auth.user.username}`
              : ""}
          </a>
          {this.props.auth.isAuthenticated ? authenticatedOptions : options}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
