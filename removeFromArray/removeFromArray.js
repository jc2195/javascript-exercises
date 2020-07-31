const removeFromArray = function(array) {
    for (i = 1; i <= arguments.length; i++) {
        let position = array.indexOf(arguments[i]);
        while (position != -1) {
            array.splice(position, 1);
            position = array.indexOf(arguments[i]);
        }
    }
    return array;
}

module.exports = removeFromArray
