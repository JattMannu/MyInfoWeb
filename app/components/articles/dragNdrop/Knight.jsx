import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ItemTypes } from './Constants';
import { DragSource } from 'react-dnd';

const knightSource = {
    beginDrag(props) {
        return {};
    }
};

function collect(connect, monitor) {
    //This gets triggered 2 times when we reload the website.
    //This gets triggered 2 times when you pick up.
    //This gets triggederd 1 time when you drop the object.
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class Knight extends Component {

    render() {
        //console.log('Knight Render() called')
        const { connectDragSource, isDragging } = this.props; //This means these function are passed down to this component.
        return connectDragSource( //DO NOT FORGET TO DO THIS connectDragSource. Took me 1hr+ to see this is missing from my code.
            <span style={{
                fontSize: '100px', //Make the size of the horse larger.
                opacity: isDragging ? 0.5 : 1, //If Knight is being drag it will be turn opac
                fontWeight: 'bold',
                cursor: 'move'
            }}>
                ♘
            </span>
        );
    }
}

Knight.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
}

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);