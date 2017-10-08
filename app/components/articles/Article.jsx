import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';
import MainMethod from './CSharp/mainMethod.jsx'

class ArticleCom extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <MainMethod />
    }
}

module.exports = ArticleCom;