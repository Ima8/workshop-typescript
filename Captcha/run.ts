import Captcha from "./Captcha"
//1 1 1 1 ->  1 + One
// 1 1 2 1 -> 1 + Two
// 1 1 2 2 -> 1 - Two
// 1 1 2 3 -> 1 X Two
//2 1 1 1 -> one + 1
let captcha = new Captcha(1,1,2,3);
console.log(captcha.toText())
