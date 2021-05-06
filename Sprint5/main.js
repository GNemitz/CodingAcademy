"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "Welcome Back"; //declare variable 
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = 'Codeevolution';
var isBeginner = true;
var total = 0;
var name = 'Nemitz';
//template strings - can span multiple lines and embedded expressions
var sentence = "My name is " + name + "\nI am a beginner in Typescript";
console.log(sentence);
var n = null; //sub types
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3]; // or
var list2 = [1, 2, 3];
//array of mixed types - TUPLE
var person1 = ['Chris', 22]; //number of strings must match the values and number of values is fixed
//let person1: [string, number] = ['Chris', 22, 35];    //i.e. can't do this.  
//let person1: [string, number] = [22, 'Chris'];    // or this - need to be in the same order as the types
// ENUM type - more friendly names to a set of values
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
; // starts with value 0 or set to 5 
var c = Color.Green;
console.log(c);
//ANY type - if you don't know what the type is - value from user input, etc. 
//allows to reassign different values
var randomValue = 10;
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
var myVariable = 10;
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
var a;
a = 10;
a = true;
var b = 20; // type inferred as number = only if initialized
//b = true;  //type error
//union of types for the same variable - use when value is not under your control - API, library, user input, etc
var multiType;
multiType = 20;
multiType = true;
var anyType; //union types restricts to type, where any has no restrictions. and intellisense support when the type is defined vs any
anyType = 10;
anyType = true;
//functions - can specify the return type
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
//add(5, '10');  // error because string
//optional parameters  - assumed to be required by the function - ? at end of parameter name to make optional
//can have any number of optional parameters but optional must always be after the required parameters
function add1(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add1(5, 10);
add1(5); // will just return 5
//default parameters - optional with a set value instead of undefined;
function add2(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add2(5, 10); // returns 15
add2(5); // will also return 15 - since num2 is not pass so it uses the default value that is defined
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Bruce'
};
fullName(p); //pass obj when calling the function 
//classes
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName); //
    };
    return Employee;
}());
//create an instance of this class
var emp1 = new Employee('Nemitz');
console.log(emp1.employeeName);
emp1.greet();
//class based inheritence - Manager class employee with extra priviledges
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruce'); //new object of the manager class
m1.delegateWork(); //access to employee class properties as well
m1.greet();
console.log(m1.employeeName);
//Access modifiers - keywords that set the accessibility of properties and methods in a class
//default is public - freely access throughout the program  - public employeeName
//private - cannot be accessed from outside of the containing class
//also cannot access a private member even in the derived class
//protected - can use within the derived class 
