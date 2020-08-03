const fibonacci = function(a) {
    if (a > 0) {
        let fibArray = [1, 1];
        if (a <= 2){
            return fibArray[fibArray.length - 1];
        }
        else {
            for (i = 3; i <= a; i++){
                let newElement = fibArray[i-2] + fibArray[i-3];
                fibArray.push(newElement);
            }
        }
        return fibArray[fibArray.length - 1];
    }
    else {
        return "OOPS";
    }
} 

module.exports = fibonacci
