import React, { Component } from "react";
import { register as authRegister } from "../../actions/auth";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password2: "",
    username_error: true,
    password_error: true,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    const userNameRegex = /^[a-z0-9_@\+\-.]*$/gim;

    switch (name) {
      case "username":
        value.match(userNameRegex)
          ? this.setState({ username_error: true })
          : this.setState({ username_error: false });
        break;
      case "password":
        value === this.state.password2
          ? this.setState({ password_error: true })
          : this.setState({ password_error: false });
      case "password2":
        value === this.state.password
          ? this.setState({ password_error: true })
          : this.setState({ password_error: false });
    }

    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  checkPassword = (e) => {
    this.handleChange(e);
    if (this.state.password === e.target.value) {
      this.setState({
        valid: true,
      });
    } else {
      this.setState({
        valid: false,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.password === this.state.password2) {
      this.props.authRegister(
        this.state.username,
        this.state.email,
        this.state.password
      );
    } else {
      this.setState({
        valid: false,
      });
    }
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/"></Redirect>;
    } else {
      return (
        <div className="col-sm-12 col-md-6 offset-md-3">
          <div className="card mt-5">
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    placeholder="Enter username"
                    required
                  />
                  {!this.state.username_error ? (
                    <small id="usernameHelp" className="form-text text-danger">
                      Enter a valid username. This value may contain only
                      letters, numbers, and @/./+/-/_ characters.
                    </small>
                  ) : (
                    ""
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="username">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    placeholder="Enter Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password2">Password</label>
                  <input
                    type="password"
                    name="password2"
                    className="form-control"
                    id="password2"
                    value={this.state.password2}
                    onChange={this.handleChange}
                    placeholder="Password"
                    required
                  />
                  {this.state.password_error ? (
                    ""
                  ) : (
                    <small id="passwordHelp" className="form-text text-danger">
                      The passwords do not match
                    </small>
                  )}
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { authRegister })(Register);
