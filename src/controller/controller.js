
function init() {

    const inputFirst = document.getElementById('inputFirst');
    const one = document.getElementById('one');
    const two = document.getElementById('two');
    const three = document.getElementById('three');
    const four = document.getElementById('four');
    const plus = document.getElementById('plus');
    const minus = document.getElementById('minus');
    const divide = document.getElementById('divide');
    const multi = document.getElementById('multi');
    const five = document.getElementById('five');
    const six = document.getElementById('six');
    const seven = document.getElementById('seven');
    const eight = document.getElementById('eight');
    const nine = document.getElementById('nine');
    const zero = document.getElementById('zero');
    const dot = document.getElementById('dot');
    const reset = document.getElementById('reset');
    const equal = document.getElementById('equal');
    const del = document.getElementById('del');

    reset.addEventListener('click', allNull, true);
    del.addEventListener('click', ce, true);
    one.addEventListener('click', writeOne, true);
    two.addEventListener('click', writeTwo, true);
    three.addEventListener('click', writeThree, true);
    four.addEventListener('click', writeFour, true);
    five.addEventListener('click', writeFive, true);
    six.addEventListener('click', writeSix, true);
    seven.addEventListener('click', writeSeven, true);
    eight.addEventListener('click', writeEight, true);
    nine.addEventListener('click', writeNine, true);
    zero.addEventListener('click', writeZero, true);
    dot.addEventListener('click', writeDot, true);
    plus.addEventListener('click', writeActionPlus, true);
    equal.addEventListener('click', calculate, true);
    minus.addEventListener('click', writeActionMinus, true);
    divide.addEventListener('click', writeActionDivide, true);
    multi.addEventListener('click', writeActionMulti, true);
};