import React from 'react';
import ReactDOM from 'react-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';
import MainMethod from './CSharp/mainMethod.jsx';
import SnakeAndLadder from './SnL/SnakeAndLadder.jsx';
import Board from './dragNdrop/Board.jsx';
import { observe } from './dragNdrop/game.js'; // This is event emmiter , once u change the knight postion it will render.

class ArticleCom extends React.Component {
    constructor(props) {
        super(props);
        this.state = { knightPosition: [0, 0] };
    }

    componentDidMount() {
        console.log('componentDidMount');

        //Calling this function after every 1 sec.
        observe(function (knightPosition) {
            this.setState({ //This function is causing all the re-render.
                knightPosition: knightPosition
            });
        }.bind(this)); //Important lesson here : the code is being run inside game.js but we need to bind this this to points to our class.
    }


    componentWillUnmount() {
        console.log('componentWillUnmount');
        debugger;
    }


    render() {
        //return <SnakeAndLadder />
        console.log(this.state);
        return (
            <Board knightPosition={this.state.knightPosition} />
        )
    }
}

module.exports = ArticleCom;