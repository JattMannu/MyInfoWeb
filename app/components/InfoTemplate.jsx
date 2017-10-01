import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';

class InfoTemplate extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SyntaxHighlighter language={this.props.language} style={docco}>{this.props.codeString}</SyntaxHighlighter>
        )
    }
}

module.exports = InfoTemplate;