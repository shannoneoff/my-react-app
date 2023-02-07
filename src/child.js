import React from "react";

export default class Child extends React.Component {
    componentWillUnmount() {    // this function will take place once the component has been mounted
        alert("The component named Header is about to be unmounted.");
    }
    render() {
        return (
            <h3>This Header was borne of a Child class.</h3>
        );
    }
}