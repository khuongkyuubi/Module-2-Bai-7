"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cylinder = void 0;
var Cylinder = /** @class */ (function () {
    function Cylinder() {
    }
    Cylinder.getPerimeter = function (radius) {
        return 2 * Math.PI * radius;
    };
    Cylinder.getBaseArea = function (radius) {
        return Math.PI * radius * radius;
    };
    Cylinder.getVolume = function (radius, height) {
        var baseArea = Math.PI * radius * radius;
        var perimeter = 2 * Math.PI * radius;
        return perimeter * height + 2 * baseArea;
    };
    return Cylinder;
}());
exports.Cylinder = Cylinder;
