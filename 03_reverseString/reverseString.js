const reverseString = function(inputString) {
    let stringReverse = ""
    for (let i=inputString.length-1; i>=0; i--){
        stringReverse=stringReverse+inputString.charAt(i)
    }

    return stringReverse
};

// Do not edit below this line
module.exports = reverseString;
