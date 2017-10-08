import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';

class mainMethod extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>
                    <a href='https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/main-and-command-args/'> Main() and command-line arguments </a>
                </h1>
                <p>
                    <ol>
                        <li>Libraries and services do not require a Main method as an entry point.</li>
                        <li>There can only be one entry point in a C# program</li>
                        <li> If you have more than one class that has a Main method,
                             you must compile your program with the /main compiler option to
                             specify which Main method to use as the entry point</li>
                        <li>The Main method is the entry point of an executable program; it is where the program control starts and ends.</li>
                        <li>Main is declared inside a class or struct</li>
                        <li>Main must be static and it need not be public.</li>
                        <li>Main can either have a void, int, or, starting with C# 7.1, Task, or Task&#60;int&#62; return type.</li>
                        <li>If and only if Main returns a Task or Task&#60;int&#62;, the declaration of Main may include the async modifier.</li>
                        <li></li>
                    </ol>
                </p>

                <h2>Question I had after reading the documentation</h2>
                <p></p>
                <p>Standing on the River Thames, London has been a major settlement for two millennia,
  its history going back to its founding by the Romans, who named it Londinium.</p>
                <p><strong>Resize this page to see that what happens!</strong></p>
            </div>
        )
    }
}

module.exports = mainMethod;