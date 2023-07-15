let cl = console.log;

class Person{
    fname :string;
    lname : string;
    constructor(fn:string,ln:string){
         this.fname = fn,
         this.lname = ln
    }
}


let c1 = new Person ( "jhon ", "doe");

cl(c1)