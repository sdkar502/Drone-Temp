import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import * as actions from "./metricActions";

class Metric extends React.Component {
  constructor(props) {
    super(props);
    this.currentTime = new Date().getTime();
    this.apiUrl = "https://react-assessment-api.herokuapp.com/api/drone/";
  }

  componentDidMount() {
    setInterval(() => {
      this.getMetricData();
    }, 3000);
  }

  getMetricData() {
    this.currentTime = new Date().getTime();
    fetch(this.apiUrl)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("something went wrong");
        }
      })
      .then(response => {
        const item = response.data[response.data.length - 1];
        this.props.dispatch(actions.setFormField("time", item.timestamp));
        this.props.dispatch(actions.setFormField("temperature", item.metric));
        this.props.dispatch(actions.setFormField("latitude", item.latitude));
        this.props.dispatch(actions.setFormField("longitude", item.longitude));
      });
  }

  render() {
    return (
      <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
        <div>
          <b>Temperature : </b>
        </div>
        <div>{this.props.state.temperature}</div>
        <div>
          <b>Latitude : </b>
        </div>
        <div>{this.props.state.latitude}</div>
        <div>
          <b>Longitude : </b>
        </div>
        <div>{this.props.state.longitude}</div>
        <div>
          <b>Last Received : </b>
        </div>
        <div>
          {Math.ceil((this.currentTime - this.props.state.time) / 1000)} seconds
          ago
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(
  mapStateToProps,
  null,
  null
)(Metric);
