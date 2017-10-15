import React from 'react';
import Row from './Row.jsx'

class TableBody extends React.Component {
    constructor(props) {
        super(props);
    }

    populateRows(numberOfRows) {
        const rows = [];
        for (let i = 0; i < this.props.countOfRows; i++) {
            rows.push(<Row key={i} rowId={i} />);
        }
        return rows;
    }

    render() {
        //Trying to do looping differently
        console.log(`countOfRows : ${this.props.countOfRows}`);

        return (
            <tbody>
                {this.populateRows(this.props.countOfRows)}
            </tbody>
        )

    }
}

module.exports = TableBody;