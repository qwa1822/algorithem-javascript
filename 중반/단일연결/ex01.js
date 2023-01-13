class Student{
  constructor(firstName,lastName,year){
    this.firstName=firstName;
    this.lastName=lastName;
    this.grade=year;
    this.tradies=0;
  }
  fullName(){
    return `Your full name is ${this.firstName} ${this.lastName}`
  }

  markLate(){
    this.tradies+=1;
    if(this.tradies>=3){
      return `YOU are EXPLEED!`;
    
    }
  
    return `${this.firstName} ${this.lastName} has been late ${this.tradies}`;
  }
}

let firstStudent=new Student("colt","steele",1);
let secondStudent=new Student("blue","stlle",2);

console.log(firstStudent.markLate());