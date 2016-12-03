class Captcha {
    //1 1 1 1 ->  1 + One
    // 1 1 2 1 -> 1 + Two
    // 1 1 2 2 -> 1 - Two
    // 1 1 2 3 -> 1 X Two
    //2 1 1 1 -> one + 1

    constructor(
        private pattern: number,
        private left: number,
        private right: number,
        private operator: number) {
          this.pattern = pattern;
          this.left = left;
          this.right = right;
          this.operator = operator;
    }

    conventNum(number): string {
        let ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
        return ones[number];
    }
    conventOperand(number): string {
        let ops = ['', '+', '-', 'X', '/'];
        return ops[number];

    }
    toText(): string {
      let left:string;
      let right:string;
      let operator:string;
        if (this.pattern === 1) {
            left = `${this.left}`;
            right = this.conventNum(this.right);
        } else if (this.pattern === 2) {
            left = this.conventNum(this.left);
            right = `${this.right}`;
        }
        operator = this.conventOperand(this.operator);
        return `${left} ${operator} ${right}`;
    }
}

export default Captcha;
