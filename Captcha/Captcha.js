"use strict";
var Captcha = (function () {
    function Captcha(pattern, left, right, operator) {
        this.pattern = pattern;
        this.left = left;
        this.right = right;
        this.operator = operator;
        this.pattern = pattern;
        this.left = left;
        this.right = right;
        this.operator = operator;
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
        var left;
        var right;
        var operator;
        if (this.pattern === 1) {
            left = "" + this.left;
            right = this.conventNum(this.right);
        }
        else if (this.pattern === 2) {
            left = this.conventNum(this.left);
            right = "" + this.right;
        }
        operator = this.conventOperand(this.operator);
        return left + " " + operator + " " + right;
    };
    return Captcha;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Captcha;
