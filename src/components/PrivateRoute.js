import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

function PrivateRoute({ component: Component, auth, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth.isLoading) {
          return <h1>Loading...</h1>;
        } else if (!auth.isAuthenticated) {
          return <Redirect to="/login"></Redirect>;
        } else {
          return <Component {...props}></Component>;
        }
      }}
    />
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
