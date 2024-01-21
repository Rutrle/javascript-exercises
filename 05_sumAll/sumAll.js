const sumAll = function(lowerBound, upperBound) {
    if (lowerBound <0 || upperBound < 0 || typeof upperBound != "number" ||typeof lowerBound != "number"){
        return "ERROR"
    }
    if (lowerBound>upperBound){
        [lowerBound, upperBound] = [upperBound, lowerBound]
    }
    let result = 0

    for (let i=lowerBound; i<upperBound+1;i++){
        result = result + i;
    }

    return result

};

// Do not edit below this line
module.exports = sumAll;
