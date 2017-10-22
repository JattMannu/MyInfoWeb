import React from 'react';
import PropTypes from 'prop-types';
import Knight from './Knight.jsx';
import Square from './Square.jsx';
import { moveKnight, canMoveKnight } from './game.js'

export default class Board extends React.Component {

    constructor(props) {
        super(props);
        this.handleSquareClick = this.handleSquareClick.bind(this);
    }

    //Observe will take a call ,back when the kinght postion changes.
    //This function is tiggered when the state changes.
    componentWillReceiveProps() {
        //console.log('componentWillReceiveProps');

    }

    handleSquareClick(x, y) {
        console.log(`(${x},${y})`)
        if (canMoveKnight(x, y))
            moveKnight(x, y);//The Event we are going to trigger is already register in article.jsx
    }

    renderSquare(i) {
        const x = i % 8; // Make sure the grid is 8 by 8 length
        const y = Math.floor(i / 8); //Make sure the height is 8 by 8
        const black = (x + y) % 2 === 1; //Give toggle color the the board

        //Check every square should we render the Knight or not.
        //We check via making sure the knightPosition is pointing to the square
        const [knightX, knighty] = this.props.knightPosition; //easy way of data extraction of a array 
        const piece = (x === knightX && y === knighty) ? <Knight /> : null; // Writing a Expression that does a IF condition to check if the the knightPostion is on the current square


        //piece will be null or react componenet [Knight]
        return (
            <div key={i} //Not sure what key is.
                style={{ width: '12.5%', height: '12.5%' }}
                onClick={function () { this.handleSquareClick(x, y) }.bind(this)} >
                <Square black={black}>
                    {piece}
                </Square>
            </div >

        );
    }

    render() {
        const squares = []; // This is filled with React.Render()
        for (let i = 0; i < 64; i++) {
            squares.push(this.renderSquare(i));
        }


        return (
            <div style={
                //This is the acutal object inside the style 
                //usually we declare const Style = {.....};
                {
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexWrap: 'wrap'
                }
            }>
                {squares}
            </div>
        );
    }
}

Board.PropTypes = {
    knightPosition: PropTypes.arrayOf(
        PropTypes.number.isRequired
    ).isRequired
}