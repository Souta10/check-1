let numbers = [2, 5, 12, 13, 15, 18, 22];
for (let i=0; i<numbers.length; i++){
if(numbers%2==0) {
  console.log(numbers + 'は偶数です');
  }
 } 

class car{
    constructor(name,numbers){
        this.name=name;
        this.numbers=numbers;
   }
   getNumgas(){
        console.log(`ガソリンは${this.name}です。ナンバーは${this.numbers}です。`);
  }
} 
let gasorin= new car(`レギュラー`,1234)
