import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';

class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerOnThisCell: null
        }

        // This binding is necessary to make `this` work in the callback
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        e.preventDefault(); //prevent a refesh
        console.dir(e.currentTarget);
        console.dir(e.altKey); //Was the Alt key down when clicking on the cell?
        console.dir(e);//https://www.dartdocs.org/documentation/react/4.1.0/react/SyntheticMouseEvent-class.html
    }

    render() {
        const cells = [];
        return (
            <td onClick={this.onClick}> Cell {this.props.cellId}</td>
        )
    }
}

module.exports = Cell;