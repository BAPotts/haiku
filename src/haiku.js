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

  eSubtractor(){
    const values = Object.values(this);
  
  
    for (const value of values) {
      for(let i=0;i<value.length;i++){
        if(value[i].charAt[value[i].length-1] ===("e")){
          console.log("found it");
            value[i].splice((value[i].length-1), 1);
        };
      };
    };
  };
};