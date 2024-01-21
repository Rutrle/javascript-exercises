const removeFromArray = function(inputArray, ...removeElements) {

    for (const removeElement of removeElements){
        removeCoordinate = inputArray.indexOf(removeElement)

        if (removeCoordinate==-1){
            continue
        }

        inputArray.splice(removeCoordinate, 1)
    }

    return inputArray

};

// Do not edit below this line
module.exports = removeFromArray;
