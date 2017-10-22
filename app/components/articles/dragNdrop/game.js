let kPosition = [0, 0];
let observer = null;

//
export function observe(callback) {
    // setInterval(function () {
    //     const x = Math.floor(Math.random() * 8);
    //     const y = Math.floor(Math.random() * 8);
    //     callback([x, y])
    // }, 1000)

    if (observer) { //Observer can only be set once.
        throw new Error('Multiple observers not implemented.');
    }
    observer = callback;
    emitChange(); //No idea why we do this?
}

function emitChange() {
    observer(kPosition);
}

export function moveKnight(tox, toy) {
    kPosition = [tox, toy];
    emitChange();
}

export function canMoveKnight(tox, toy) {
    if (tox === undefined || toy === undefined)
        throw '[Coder] tox or toy is not defined.'

    const [x, y] = kPosition; //Using data extraction to get data from a array
    if (x === undefined || x === undefined)
        throw '[Coder] kPosition is not set correctly.'

    const deltaX = Math.abs(tox - x);
    const deltaY = Math.abs(toy - y);

    console.log(`((${deltaX} ,${deltaY})) `)
    return (deltaX === 2 && deltaY === 1) || (deltaX === 1 && deltaY === 2);

}

