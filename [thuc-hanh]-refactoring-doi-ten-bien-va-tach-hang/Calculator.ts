export enum Operator {
    ADDITION = "+",
    SUBTRACTION = '-',
    MULTIPLICATION = '*',
    DIVISION = '/'
}

export class Calculator {
    public static calculate(firstOperand: number, secondOperand: number, operator: string): number {
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
    }
}