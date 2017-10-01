const React = require('react');

class InfoLinks extends React.Component {
    constructor(props) {
        super(props);

        //TODO
        //MouseOverEvent
        //Onclickevent
        //Need a good font
        //Color scheme
    }

    render() {
        const style = {
            listStyleType: 'none',
            fontFamily: "Times New Roman"
        };

        return (
            <div> 
                <ul style={style}>
                    {
                        this.props.InfoListArray.map(function (item, index) {
                            return (
                                <li key={item.name}>{item.name}</li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

module.exports = InfoLinks;

