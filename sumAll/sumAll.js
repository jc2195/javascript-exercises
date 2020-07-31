const sumAll = function(num1, num2) {
    if (((num1 >= 0) && (num2 >= 0)) && ((typeof(num1) == 'number') && (typeof(num2) == 'number'))) {
        let smallerNumber = 0;
        let biggerNumber = 0;
        let sum = 0;
        if (num1 > num2) {
            smallerNumber = num2;
            biggerNumber = num1;
        }
        else {
            smallerNumber = num1;
            biggerNumber = num2;
        }
        for (i = smallerNumber; i <= biggerNumber; i++) {
            sum += i
        }
        return sum;
    }
    else {
        return "ERROR";
    }
}

module.exports = sumAll
