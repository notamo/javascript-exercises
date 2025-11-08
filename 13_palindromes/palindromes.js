const palindromes = function (s) {
    const sClean = s
        .split("")
        .filter((c) => 
                ((c.charCodeAt(0) >= 48) && (c.charCodeAt(0) <= 57 ))  ||
                ((c.charCodeAt(0) >= 65) && (c.charCodeAt(0) <= 90 ))  ||
                ((c.charCodeAt(0) >= 97) && (c.charCodeAt(0) <= 122))   
        )
        .join("")
        .toLowerCase();

    const sCleanRev = sClean.split("").reverse().join(""); 
    return sClean === sCleanRev;
};

// Do not edit below this line
module.exports = palindromes;
