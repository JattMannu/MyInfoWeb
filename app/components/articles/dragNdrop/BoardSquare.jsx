import React from 'react';
import propTypes from 'prop-types';
import Square from './Square.jsx'
import { canMoveKnight, moveKnight } from './game.js'
//To make this a DropTraget , see line 63 also. That is the linker
import { DropTarget } from 'react-dnd';
import { ItemTypes } from './Constants';

//Now we are going to make this a dropTraget.
//http://react-dnd.github.io/react-dnd/docs-drop-target.html
const squareTarget = {
    //These function inside, we can read the documentation from the website above.
    canDrop(props) {
        return canMoveKnight(props.x, props.y);
    },

    drop(props) {
        //These props belong to square not the knight.
        moveKnight(props.x, props.y);
    }
}

function collect(connect, monitor) {

    //These 2 functions come from some where.
    //See render function.
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    };
}

//This class is a wrapper, that stores the X and Y location of the each CELL.
//We must have X and Y, We will use Propstype to ensure they are added to this file.
class BoardSquare extends React.Component {

    renderOverlay(color) {
        return (
            //This is interesting, opacity is useful for keeping the background there, opacity can be use for highlight.
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                zIndex: 1,
                opacity: 0.5,
                backgroundColor: color,
            }} />
        );
    }

    //Must have this function in a react component.
    render() {
        //We must have x and y from props.
        const { x, y, connectDropTarget, isOver, canDrop } = this.props;
        //We must pass variable black to the Square.Jsx
        const black = (x + y) % 2 === 1;
        console.log(`isOver : ${isOver}`);
        //connectDropTarget equals the react component we want to drop the item into.
        return connectDropTarget(
            <div style={{
                position: 'relative',
                width: '100%',
                height: '100%'
            }}>
                <Square black={black}>
                    {this.props.children
                        //This is the Knight been passed down.
                    }
                </Square>
                {isOver && canDrop && this.renderOverlay('yellow')}
                {isOver && !canDrop && this.renderOverlay('red')}
                {!isOver && canDrop && this.renderOverlay('green')}
            </div>
        );

    }
}

//Declare an object that will keep the validation
BoardSquare.propTypes = {
    //We require X and Y
    //X is a Int
    x: propTypes.number.isRequired,
    //Y is a Int
    y: propTypes.number.isRequired,
    //Adding the 2 function in the collect object
    connectDropTarget: propTypes.func.isRequired,
    isOver: propTypes.bool.isRequired
}


export default DropTarget(ItemTypes.KNIGHT, squareTarget, collect)(BoardSquare);