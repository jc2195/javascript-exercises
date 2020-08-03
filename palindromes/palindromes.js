const palindromes = function(string) {
    string = string.toLowerCase();
    string = string.split("");
    string = string.filter(index => index >= "a" && index <= "z");
    let normalLetters = string.join("");
    let reversedLetters = string.slice().reverse().join("");
    return normalLetters == reversedLetters;
}

module.exports = palindromes
