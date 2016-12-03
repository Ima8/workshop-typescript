var FizzBuzz = (function () {
    function FizzBuzz() {
    }
    FizzBuzz.prototype.say = function () {
        return "hello";
    };
    return FizzBuzz;
}());
var fizzBuzz = new FizzBuzz();
console.log(fizzBuzz.say());
