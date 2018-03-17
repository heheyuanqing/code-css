function createFunction() {
    var result = [];

    for (var i = 0; i < 10; i++) {
        result[i] = function (num) {
            return function () {
                console.log(num);
                return num;
            };
        }(i);
    }
    console.log(result);
    return result;
}

createFunction();