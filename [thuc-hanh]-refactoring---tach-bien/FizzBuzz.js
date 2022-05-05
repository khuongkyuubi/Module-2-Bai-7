"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FizzBuzz = void 0;
var FizzBuzz = /** @class */ (function () {
    function FizzBuzz(n) {
        this.isDivisibleBy15 = n % 3 === 0 && n % 5 === 0;
        this.isDivisibleBy3 = n % 3 === 0;
        this.isDivisibleBy5 = n % 5 === 0;
        if (this.isDivisibleBy15) {
            this.message = 'FizzBuzz';
        }
        else if (this.isDivisibleBy5) {
            this.message = 'Fizz';
        }
        else if (this.isDivisibleBy3) {
            this.message = 'Buzz';
        }
        else {
            this.message = n + '';
        }
    }
    return FizzBuzz;
}());
exports.FizzBuzz = FizzBuzz;
