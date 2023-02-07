import React from "react";

export default class Children extends React.Component {
    constructor(props) {
        super();
        this.state = { name: "Test" };
    }
    render() {
        return <h2>{this.state.name}</h2>;
    }
}