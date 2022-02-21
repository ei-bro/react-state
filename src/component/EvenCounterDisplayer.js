import React, { Component } from "react";

export default class EvenCounterDisplayer extends Component {
    render() {
        return <h1>All click counter : {this.props.value}</h1>;
    }
}
