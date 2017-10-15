import React from 'react';
import TableBody from './TableBody.jsx'

class SnakeAndLadder extends React.Component {
    constructor(props) {
        super(props);
        this.rowCount = 10;
    }

    render() {
        const style = {
            SnakeAndLadderMain: {
                backgroundImage: 'url(https://cdn.vectorstock.com/i/1000x1000/30/56/snakes-and-ladders-vector-413056.jpg)',
                backgroundSize: 'contain',
                width: '1000px',
                height: '1080px'
            }

        };

        return (
            <div>
                <h1>Snake And Ladder</h1>
                <div>
                    <table id="SnakeAndLadderMain" style={style.SnakeAndLadderMain}>
                        <TableBody countOfRows={this.rowCount} />
                    </table>
                </div>
            </div>
        )
    }
}

module.exports = SnakeAndLadder;