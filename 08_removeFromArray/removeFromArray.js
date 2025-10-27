const removeFromArray = function(arr, ...args) {
    let prunedArr = arr.slice();

    for (elementToRemove of args) {
        prunedArr = prunedArr.filter(element => element !== elementToRemove);
    }

    return prunedArr;
};

// Do not edit below this line
module.exports = removeFromArray;
