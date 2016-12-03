"use strict";
var Captcha = (function () {
    function Captcha(pattern, left, right, operand) {
        this.pattern = pattern;
        this.left = left;
        this.right = right;
        this.operand = operand;
        this.pattern = pattern;
        this.left = left;
        this.right = right;
        this.operand = operand;
    }
    Captcha.prototype.toText = function () {
        return this.left + " + One";
    };
    return Captcha;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Captcha;
