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
    Captcha.prototype.conventNum = function (number) {
        var ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
        return ones[number];
    };
    Captcha.prototype.conventOperand = function (number) {
        var ops = ['', '+', '-', 'X', '/'];
        return ops[number];
    };
    Captcha.prototype.toText = function () {
        if (this.pattern === 1) {
            var right = this.conventNum(this.right);
            var operand = this.conventOperand(this.operand);
            return this.left + " " + operand + " " + right;
        }
        else if (this.pattern === 2) {
            var left = this.conventNum(this.left);
            var operand = this.conventOperand(this.operand);
            return left + " " + operand + " " + this.right;
        }
    };
    return Captcha;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Captcha;
