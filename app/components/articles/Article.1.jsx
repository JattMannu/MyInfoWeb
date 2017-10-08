import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';

class ArticleCom extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>
                    <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise'> Promise </a>
                </h1>
                <h2>Question I had after reading the documentation</h2>
                <p></p>
                <p>Standing on the River Thames, London has been a major settlement for two millennia,
  its history going back to its founding by the Romans, who named it Londinium.</p>
                <p><strong>Resize this page to see that what happens!</strong></p>
            </div>
        )
    }
}

module.exports = ArticleCom;