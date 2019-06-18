//Just like the previous problem, but with e instead of PI. Enter a number and have //the program generate e up to that many decimal places. Keep a limit to how far the //program will go.

//Use Math.E to invoke number e. This time, limit to 8 decimal points. Also use .toFixed to set decimal limit.

console.log("Enter how many digits of e you would like viewed. Program may not exceed 8 decimal places.");

function invokeE(digit) {
    var e = Math.E;
    if (digit > 8) return e.toFixed(8);
    else return e.toFixed(digit);
}

invokeE();