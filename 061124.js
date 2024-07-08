// Object Oriented Programing
// Concept of Classes
class car{
    constructor(name, model, year){
        this.carName=name;
        this.CarModel=model;
        this.ProductionYear=year;
    }
    age(a){
        return a-this.ProductionYear;
    }
}
const car1=new car("Koenigsegg", "Regera", 2022);
const car2=new car("Mercedes", "AMG", 2021);

document.write(car1.carName)
document.write(car1.CarModel)

console.log(car2.carName)
console.log(car2.ProductionYear)

let d= new Date();
let curYear = d.getFullYear();
console.log(car1.age(curYear))

// Concept Of Inheritance
class man{
    constructor(name, age, status){
        // construction method code goes here
        this.name=name;
        this.age=age;
        this.status=status;
    }
    old(){
        return this.name + "is" + this.age + "old";
    }
}
   
class woman extends man{
    constructor(name, age, status, address, phoneNumber){
        super(name, age, status);
        this.name=name;
        this.age=age;
        this.status=status;
        this.address=address;
        this.phoneNumber=phoneNumber;
    }
}
let person1=new woman("Sanusi", 20, "Single", "Old CBN Block")
document.write(person1.old())