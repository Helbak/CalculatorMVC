function writeOne() {
    if (getNum1().length <= 7)
        setNum1(getNum1() + '1');
    toScreen(getNum1());
    return getNum1();
};

function writeTwo() {
    if (getNum1().length <= 7)
        setNum1(getNum1() + '2');
    toScreen(getNum1());
    return getNum1();
};

function writeThree() {
    if (getNum1().length <= 7)
        setNum1(getNum1() + '3');
    toScreen(getNum1());
    return getNum1();
};

function writeFour() {
    if (getNum1().length <= 7)
        setNum1(getNum1() + '4');
    toScreen(getNum1());
    return getNum1();
};

function writeFive() {
    if (getNum1().length <= 7)
        setNum1(getNum1() + '5');
    toScreen(getNum1());
    return getNum1();
};

function writeSix() {
    if (getNum1().length <= 7)
        setNum1(getNum1() + '6');
    toScreen(getNum1());
    return getNum1();
};

function writeSeven() {
    if (getNum1().length <= 7)
        setNum1(getNum1() + '7');
    toScreen(getNum1());
    return getNum1();
};

function writeEight() {
    if (getNum1().length <= 7)
        setNum1(getNum1() + '8');
    toScreen(getNum1());
    return getNum1();
};

function writeNine() {
    if (getNum1().length <= 7)
        setNum1(getNum1() + '9');
    toScreen(getNum1());
    return getNum1();
};

function writeZero() {
    if (getNum1().length <= 7)
        setNum1(getNum1() + '0');
    toScreen(getNum1());
    return getNum1();
};

function writeDot() {
    if (getNum1().length <= 6)
        setNum1(getNum1() + '.');
    toScreen(getNum1);
    disableButton(dot);
    return getNum1;
};

function enableButton(btn) {
    btn.disabled = false;
};

function disableButton(btn) {
    btn.disabled = true;
};

function saveOldNum() {
    enableButton(dot);
    setOldNum(parseFloat(getNum1()));
    clearNum1();
};

function writeActionPlus() {
    saveOldNum();
    // toScreen('');
    setAction('doPlus');
};

function writeActionMinus() {
    if (getNum1() === '') {
        writeMinus();
        return getNum1();
    }
    saveOldNum();
    // toScreen('');
    setAction('doMinus');

};

function writeMinus() {
    setNum1(getNum1() + '-');
    toScreen(getNum1());
    return getNum1();
};

function writeActionDivide() {
    saveOldNum();
    // toScreen('');
    setAction('doDivide');
    return getAction();
};

function writeActionMulti() {
    saveOldNum();
    // toScreen('');
    setAction('doMulti');
};

function doPlus() {
    return getOldNum() + parseFloat(getNum1());
};

function doMinus() {
    return getOldNum() - parseFloat(getNum1());
};

function doDivide() {
    return getOldNum() / parseFloat(getNum1());
};

function doMulti() {
    return getOldNum() * parseFloat(getNum1());
};

function doMath() {
    let action = getAction();
    switch (action) {
        case "doPlus":
            return doPlus();
        case "doMinus":
            return doMinus();
        case "doMulti":
            return doMulti();
        case "doDivide":
            return doDivide();
    }
};

function calculate() {
    setResult(doMath());
    setOldNum(null);
    // setNum1(toString(getResult()));
    let numberResult = getResult();
    let stringResult = String(numberResult);
    setNum1(stringResult);
    toScreen(getNum1());
    return getNum1();
};

function allNull() {
    disableButton(dot);
    setOldNum(null);
    setNum1('');
    toScreen(0);
    return getNum1();
};

function toScreen(n) {
    inputFirst.value = n;
};

function ce() {
    setNum1(getNum1().substring(0, getNum1().length - 1));
    toScreen(getNum1());
    return getNum1();
};






