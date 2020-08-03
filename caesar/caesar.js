const caesar = function(string, number) {
    let arrayString = string.split("");
    for (j = 0; j < arrayString.length; j++){
        let newValue = shift(arrayString[j], number);
        arrayString[j] = newValue;
    }
    arrayString = arrayString.join("");
    return arrayString;
}

function shift(a, number) {
    let shiftedLetter = a;
    if ((shiftedLetter >= "a" && shiftedLetter <= "z") || (shiftedLetter >= "A" && shiftedLetter <= "Z")) {
        if (number >= 0) {
            for (i = number; i > 0; i--) {
                if (shiftedLetter == 'Z') {
                    shiftedLetter = "A";
                }
                else if (shiftedLetter == "z") {
                    shiftedLetter = "a";
                }
                else {
                    shiftedLetter = String.fromCharCode(shiftedLetter.charCodeAt(0) + 1);
                }
            }
        }
        else if (number < 0) {
            for (i = number; i < 0; i++) {
                if (shiftedLetter == "A") {
                    shiftedLetter = "Z";
                }
                else if (shiftedLetter == "a") {
                    shiftedLetter = "z";
                }
                else {
                    shiftedLetter = String.fromCharCode(shiftedLetter.charCodeAt(0) - 1);
                }
            }
        } 
    } 
    return shiftedLetter;
}

module.exports = caesar
