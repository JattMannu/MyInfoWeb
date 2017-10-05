import React from 'react';


class NavCom extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const style = {
            background: '#eee',
            width: '200px',
            height: '100%',
            order: '-1'

        }

        return (
            <ul>
                <li><a href="#">C#</a></li>
                <li><a href="#">Javascript</a></li>
                <li><a href="#">PowerShell</a></li>
                <li><a href="#">Batch</a></li>
                <li><a href="#">C++</a></li>
            </ul>
        )
    }
}


module.exports = NavCom;