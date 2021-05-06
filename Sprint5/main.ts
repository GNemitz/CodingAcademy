export{}
let message = "Welcome Back";  //declare variable 
console.log(message);


let x = 10;
const y = 20;

let sum;
const title = 'Codeevolution';


let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Nemitz';

//template strings - can span multiple lines and embedded expressions
let sentence: string = `My name is ${name}
I am a beginner in Typescript`;
console.log(sentence);


let n: null = null;   //sub types
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1,2,3];  // or
let list2: Array<number> = [1,2,3];

//array of mixed types - TUPLE
let person1: [string, number] = ['Chris', 22];    //number of strings must match the values and number of values is fixed
//let person1: [string, number] = ['Chris', 22, 35];    //i.e. can't do this.  
//let person1: [string, number] = [22, 'Chris'];    // or this - need to be in the same order as the types

// ENUM type - more friendly names to a set of values
enum Color{Red = 5, Green, Blue};  // starts with value 0 or set to 5 
let c: Color = Color.Green;
console.log(c);

//ANY type - if you don't know what the type is - value from user input, etc. 
//allows to reassign different values
let randomValue: any = 10;
randomValue = true;
randomValue = 'Nemitz';

//let myVariable: any = 10;  // no errors because ANY type
//console.log(myVariable.name);
//myVariable();
//myVariable.toUpperCase();

//new type of unknown is similar to ANY but you can't access any properties of an unknown type or call or contruct them
//let myVariable: unknown = 10;  // no errors because ANY type
//console.log(myVariable.name);
//myVariable();
//(myVariable as string).toUpperCase();   //TS assumes we have made the necessary check - type assertion! similar to type costing

//user defined types
//check if a function has a name property or not
let myVariable: unknown = 10; 

//function hasName(obj: any): obj is { name: string } {
//    return !!obj &&
//      typeof obj === "object" &&
//      "name" in obj
//}
//  if (hasName(myVariable)) {
//    console.log(myVariable.name);
//}
//(myVariable as string).toUpperCase();

//type inference 
let a;
a = 10;
a = true;

let b = 20;  // type inferred as number = only if initialized
//b = true;  //type error

//union of types for the same variable - use when value is not under your control - API, library, user input, etc
let multiType: number | boolean;
multiType = 20; 
multiType = true;

let anyType: any;  //union types restricts to type, where any has no restrictions. and intellisense support when the type is defined vs any
anyType = 10;
anyType = true;

//functions - can specify the return type
function add(num1: number, num2: number): number {
  return num1 + num2
}
add(5,10);
//add(5, '10');  // error because string

//optional parameters  - assumed to be required by the function - ? at end of parameter name to make optional
//can have any number of optional parameters but optional must always be after the required parameters
function add1(num1: number, num2?: number): number {
  if (num2)
    return num1 + num2;
  else  
    return num1;
}
add1(5,10);
add1(5); // will just return 5

//default parameters - optional with a set value instead of undefined;
function add2(num1: number, num2: number = 10): number {
  if (num2)
    return num1 + num2;
  else  
    return num1;
}
add2(5,10);  // returns 15
add2(5); // will also return 15 - since num2 is not pass so it uses the default value that is defined

//Interface - specify an object as a type in TS
// person parameter of type obj - 2 properties, first and last name 
//function fullName(person: {firstName: string, lastName: string}) {
//    console.log(`${person.firstName} ${person.lastName}`);  
//}
//let p = {   //object that resembles a person 
//  firstName: 'Bruce',
//  lastName: 'Wayne'
//};
//fullName(p); //pass obj when calling the function 
//in this case, person parameter has 2 properties.  more helpful with an object that has 5-10 properties or used in multiple functions
//interface of the person object and use that as type in the function parameter
interface Person {  // useful for forms where something is not required.
  firstName: string;
  lastName?: string;  //optional property
}
function fullName(person: Person}) {  //cleaner 
    console.log(`${person.firstName} ${person.lastName}`);  
}
let p = {   //object that resembles a person 
  firstName: 'Bruce',
  //lastName: 'Wayne'  //no error
};
fullName(p); //pass obj when calling the function 


//classes
class Employee {      //create a class
  employeeName: string;    

  constructor(name: string) {     //constructor to initialize the employee name
    this.employeeName = name;
  }
  greet() {     //method
    console.log(`Good Morning ${this.employeeName}`);  //
  }
}
//create an instance of this class
let emp1 = new Employee('Nemitz');
console.log(emp1.employeeName);
emp1.greet();

//class based inheritence - Manager class employee with extra priviledges
class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);   //super key word to call the base class contructor 
  }
  delegateWork() {
    console.log(`Manager delegating tasks`);
  }
}

let m1 = new Manager ('Bruce'); //new object of the manager class
m1.delegateWork();    //access to employee class properties as well
m1.greet();
console.log(m1.employeeName);


//Access modifiers - keywords that set the accessibility of properties and methods in a class
//default is public - freely access throughout the program  - public employeeName

//private - cannot be accessed from outside of the containing class
//also cannot access a private member even in the derived class

//protected - can use within the derived class 