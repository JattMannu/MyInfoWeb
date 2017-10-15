import React from 'react';
import Cell from './Cell.jsx'

class Row extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const cells = [];
        for (let i = 0; i < 10; i++) {
            const cellId = this.props.rowId * 10 + i;
            cells.push(<Cell key={cellId} cellId={cellId} />);
        }

        return (
            <tr>
                {cells}
            </tr>
        )
    }
}

module.exports = Row;