const repeatString = function(string, num) {
    if (num < 0){
        return 'ERROR';
    }
    else {
        let result = "";
        for (i=num; i>0; i--) {
            result = result + string;
        }
        return result;
    }
}

module.exports = repeatString
