const repeatString = function(str, num) {
    if (num < 0) {
        return "ERROR";
    }

    let resString = "";
    while (num > 0) {
        resString += str;
        num--; 
    }
    return resString;
};

// Do not edit below this line
module.exports = repeatString;
