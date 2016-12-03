"use strict";
var Captcha_1 = require("./Captcha");
var captcha = new Captcha_1.default(1, 1, 1, 1);
console.log(captcha.toText());
