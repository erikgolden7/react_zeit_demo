import React, { Component } from "react";
//import './Home.css';
const mainContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "4em",
  height: "75.5vh",
  backgroundColor: "darkgrey"
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div style={mainContainer}>Wilkommen!</div>;
  }
}
export default Home;
