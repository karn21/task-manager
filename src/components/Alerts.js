import React, { Component } from "react";
import { connect } from "react-redux";
import { withAlert } from "react-alert";
import PropTypes from "prop-types";

export class alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    msg: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, alert, msg } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.title) {
        alert.error(`Title: ${error.msg.title[0]}`);
      }
      if (error.msg.description) {
        alert.error(`Description: ${error.msg.description[0]}`);
      }
      if (error.msg.non_field_errors) {
        alert.error(error.msg.non_field_errors[0]);
      }
      if (error.msg.username) {
        alert.error(error.msg.username[0]);
      }
      // alert.error(error.msg.detail);
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
