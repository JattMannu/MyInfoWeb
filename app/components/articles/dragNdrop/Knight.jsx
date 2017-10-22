import React, { Component } from 'react'; //With component like this i can call it Component rather than React.Component.

export default class Knight extends Component {

    render() {
        return (
            <span style={{
                fontSize: '100px', //Make the size of the horse larger.
            }}>
                ♘
            </span>
        );
    }
}