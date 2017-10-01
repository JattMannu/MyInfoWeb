
//import React from 'react'; //No idea why this is not working.

//React is used for creating React Components
const React= require('react');
//ReactDOM is used to render and Interagte with DOM.
const ReactDOM = require('react-dom');

console.log('Hello from a JSX file.')

const InfoList = require('./components/infoList.jsx');

//Redering the react components
ReactDOM.render(<InfoList />,
    document.getElementById('app') //any id will we loaded to window
   // app
);




