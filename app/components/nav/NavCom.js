import React from 'react';


class NavCom extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const style = {
             background:'#eee',
             width: '200px',
             height: '100%',
             order:'-1'

        }

        return (
            <nav className="nav" style={style} >
                <ul>
                    <li><a href="#">London</a></li>
                    <li><a href="#">Paris</a></li>
                    <li><a href="#">Tokyo</a></li>
                </ul>
            </nav>
        )
    }
}


module.exports = NavCom;