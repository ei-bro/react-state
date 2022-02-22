import React, { Component } from "react";

export default class CounterDisplayer extends Component {
    render() {
        return <h1>All clicks Counter : {this.props.value}</h1>;
    }
}
