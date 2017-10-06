//require superagent = require('');
//http://ts7.travian.com/dorf1.php

const sampleA = function (cb) {

    //This Function will be trigger 1 second later.
    setTimeout(function () {
        console.log('1 Second Later')
    }, 1000);
    console.log('Outer function called');
}

const callback = function () {
    console.log('Inner Function called.');
};

let myPromise = new Promise(function (resolve, reject) {
    const line = 'Promise';
    if (true)
        resolve('Passed to then.')
});


sampleA(callback);

