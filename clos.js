
var answer = (function () {
    var ans = 42;
    return function inner(){
        return ans;
    };
    X
}());
console.log(answer);