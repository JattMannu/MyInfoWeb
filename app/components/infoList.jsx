const React = require('react');

const InfoLinks = require('./infoLinks.jsx');

//My Standard we should name the file == class name.
class InfoList extends React.Component {
    constructor(props) {
        super(props);
        this.InfoListArray = [];
        this.InfoListArray.push({name:'React'});
        this.InfoListArray.push({name:'C#'});
        this.InfoListArray.push({name:'Random'});

    }
    render() {
        // the () means non breaking js.
        //This is jsx file it means we can add html;
        //Inside jsx we can only use existing html
        return(
            <div>
                <h1>List of information</h1>
                <InfoLinks InfoListArray={this.InfoListArray}/> 
            </div>
        );
    }
}

module.exports = InfoList;