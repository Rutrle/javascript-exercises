const repeatString = function(string, repeats) {
    if (repeats<0){
        return "ERROR"
    }
    let result = string.repeat(repeats)
    return result

};

// Do not edit below this line
module.exports = repeatString;
