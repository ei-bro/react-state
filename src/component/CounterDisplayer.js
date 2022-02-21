import React, { Component } from "react";

class Counterdisplayer extends Component {
    render() {
        return <h1>All click counter : {this.props.value}</h1>;
    }
}

export default Counterdisplayer;
