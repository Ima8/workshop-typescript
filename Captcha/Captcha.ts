class Captcha{
  //1 1 1 1 ->  1 + One
  // 1 1 2 1 -> 1 + Two
  // 1 1 2 2 -> 1 - Two
  // 1 1 2 3 -> 1 X Two
  //2 1 1 1 -> one + 1

  constructor(
    private pattern:number,
    private left:number,
    private right:number,
    private operand:number){
      this.pattern=pattern;
      this.left=left;
      this.right=right;
      this.operand=operand;
  }

  conventNum(number):string{
    let ones=['','One','Two','Three','Four','Five','Six','Seven','Eight','Nine'];
    return ones[number];
  }
  conventOperand(number):string{
    let ops=['','+','-','X','/'];
    return ops[number];
  }
  toText():string{
    if(this.pattern===1){
      let right= this.conventNum(this.right);
      let operand = this.conventOperand(this.operand);
      return `${this.left} ${operand} ${right}`
    }else if(this.pattern===2){
      let left = this.conventNum(this.left);
      let operand = this.conventOperand(this.operand);
      return `${left} ${operand} ${this.right}`
    }

  }
}

export default Captcha;
