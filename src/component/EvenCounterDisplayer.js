import React, { Component } from "react";

export default class EvenCounterDisplayer extends Component {
    evens() {
        var eve = this.props.even;
        if (eve % 2 == 0) {
            return eve;
        } else {
            return eve - 1;
        }
    }
    render() {
        return <h1>Even clicks counter : {this.evens()} </h1>;
    }
}
