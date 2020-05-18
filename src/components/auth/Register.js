import React, { Component } from "react";

export class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password2: "",
    valid: true,
  };

  handleChange = (e) => {
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
    console.log("submit");
  };

  render() {
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
                />
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
                  onChange={this.checkPassword}
                  placeholder="Password"
                />
                {this.state.valid ? (
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

export default Register;
