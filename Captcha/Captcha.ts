class Captcha{

  private pattern:number;
  private left:number;
  private right:number;
  private operand:number;

  constructor(
    pattern:number,
    left:number,
    right:number,
    operand:number){
      this.pattern=pattern;
      this.left=left;
      this.right=right;
      this.operand=operand;
  }
  toText():string{
    //return this.left + " + one"
    return `${this.left} + One`
  }
}

export default Captcha;
