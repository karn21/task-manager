import React, { Component } from "react";
import { connect } from "react-redux";
import { withAlert } from "react-alert";

export class alerts extends Component {
  componentDidUpdate(prevProps) {
    const { error, alert, msg } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.title) {
        alert.error(`Name: ${error.msg.title[0]}`);
      }
      if (error.msg.description) {
        alert.error(`Description: ${error.msg.description[0]}`);
      }
    }
    if (msg !== prevProps.msg) {
      alert.success(msg.msg);
    }
  }

  render() {
    return <></>;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
  msg: state.messages,
});

export default connect(mapStateToProps)(withAlert()(alerts));
