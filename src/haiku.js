export class Poem {
  constructor(line1, line2, line3){
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  wordSeperator(){
    this.line1 = this.line1.split(' ');
    this.line2 = this.line2.split(' ');
    this.line3 = this.line3.split(' ');
    };
}