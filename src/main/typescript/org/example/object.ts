//Object literals
let Employee_details = {
    Empname: "John",
    EmpSection: "field"

}
console.log("Employee Name is:" + 
    Employee_details.Empname + 
    " Employee's section is:" 
    + Employee_details.EmpSection
);

//Constructor
/*function Employee(Employee_fn, Employee_ln, Employee_age) {
    this.fn = Employee_fn;
    this.ln = Employee_ln;
    this.age = Employee_age;
 }
 
 var p1 = new Employee("Raviteja", "Velamuri", 24);
 console.log("Name: " + p1.fn + " " + p1.ln);
 console.log("Age: " + p1.age);*/
 
//Fun Parameters
let employee = {
    firstname: " Raviteja ",
    lastname: " Velamuri ",  
}
function display( obj: { 
    firstname:String,lastname:String
}) : void {  
    console.log("Name is"+obj.firstname+" "+
        "lastname is"+" "+obj.lastname);
}  

display(employee);


//Object.create
/*let personPrototype = {
    greet() {
        return `Hello, my name is ${this.name}.`;
    }
};

let person = Object.create(personPrototype);
person.name = "Pankaj";
person.age = 20;
person.gender = "male";

console.log(person);
console.log(person.greet());*/


//Classes
class Person {
    name: string;
    age: number;
    gender: string;

    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    greet() {
        return `Hello, my name is ${this.name}.`;
    }
}

let person = new Person("Pankaj", 20, "male");

console.log(person);
console.log(person.greet()); 
