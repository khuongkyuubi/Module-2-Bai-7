"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = exports.Operator = void 0;
var Operator;
(function (Operator) {
    Operator["ADDITION"] = "+";
    Operator["SUBTRACTION"] = "-";
    Operator["MULTIPLICATION"] = "*";
    Operator["DIVISION"] = "/";
})(Operator = exports.Operator || (exports.Operator = {}));
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.calculate = function (firstOperand, secondOperand, operator) {
        switch (operator) {
            case Operator.ADDITION:
                return firstOperand + secondOperand;
            case Operator.SUBTRACTION:
                return firstOperand - secondOperand;
            case Operator.MULTIPLICATION:
                return firstOperand * secondOperand;
            case Operator.DIVISION:
                if (secondOperand != 0)
                    return firstOperand / secondOperand;
                else
                    console.log("Can not divide by 0");
                break;
            default:
                console.log("Unsupported operation");
        }
    };
    return Calculator;
}());
exports.Calculator = Calculator;
