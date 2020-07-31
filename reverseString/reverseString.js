const reverseString = function(string) {
    let stringFlip = string.split("");
    stringFlip = stringFlip.reverse();
    stringFlip = stringFlip.join("");
    return stringFlip;
}

module.exports = reverseString
