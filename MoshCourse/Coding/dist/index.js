"use strict";
// VARIABLES IN TYPESCRIPT
// let age = 20
// if (age >= 18) {
//     age += 10
// }
// console.log(age)
// DATATYPES IN TYPESCRIPT
// let sales:number = 123_456_789
// let course:string = "TypeScript"
// let is_published: boolean = true
// let level ;   // "level" has type "any" which is implicit type that means compiler try to guess it
// console.log(typeof sales, typeof course, typeof is_published, typeof level)
// function render(documnet){
//     console.log(documnet)
// }
// ARRAYS IN TYPESCRIPT
// let numbers= [1, 2, "3", 4," 5"]  // This is a valid JS but not TS
// let numbers: = []   // This is type inference OR means any type of array
// let numbers: number[] = [1, 2, 3, 4, 5] // This is a valid TS
// TUPLES IN TYPESCRIPT ::: (Tuple is a fixed length array)
// let user: [number, string, boolean] = [1, "Developer", true] // Tuple use is mostly as key-value pair
// user.push(10) // This is valid in TS but not in JS
// console.log(user)
// ENUMS IN TYPESCRIPT ::: (Enums are used to define a set of named constants)
// This will generate a lot JS code
// enum shirtSize {Small = 1, medium = 2, large = 3}
// let myShirtSize: shirtSize = shirtSize.Small
// console.log(myShirtSize)
// This will generate a lot of less JS code ::: (const generate more optimized code)
// const enum shirtSize {Small = 1, medium = 2, large = 3}
// let myShirtSize: shirtSize = shirtSize.Small
// console.log(myShirtSize)
// FUNCTIONS IN TYPESCRIPT ::: (Functions return undefined by default if no return type is defined and its setting does not set in tsconfig.json file) (Type of function can be void as well)
// function calculateTax(amount:number, taxYear: number = 2020):number{
//     if(amount > 2999 && taxYear >= 2021)
//         return amount * 1.2
//     return amount * 1.1
// }
// console.log(calculateTax(3000).toFixed(2))
// OBJECTS IN TYPESCRIPT ::: (Object is combination a key-value pair)
// const employee:{
//     readonly id: number, // readonly means it can not be changed
//     // name?: string // This ? means it is optional OR initialize the name by empty string
//     name: string,
//     retire: (date: Date) => void
// } = {
//     id:1,
//     name: "Ali",
//     retire: function(date: Date){
//         console.log(this.name + " is retiring on " + date)
//     }
// }
// // employee.id = 2 // This will give an error because id is readonly
// employee.name = "Asad"
// console.log(employee)
// console.log(employee.retire(new Date()))
// ************************* ( SECTION-3 ::: ADVANCED TYPES )***********************************
// TYPE ALIASES IN TYPESCRIPT ::: (Type aliases are used to create a new name for a type) (There are 3 problems for the below object:- 1. It is not reusable 2. It is constant and we can't create a new little bit different object 3. It is easily readable)
// type Employee = {
//   // Use Pascal Case for type aliases => Employee
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// };
// const employee: Employee = {
//   id: 1,
//   name: "Ali",
//   retire: function (date: Date) {
//     console.log(this.name + " is retiring on " + date);
//   },
// };
// TYPE UNIONS(symbol: |) & NARROWING IN TYPESCRIPT ::: (Type unions are used to allow multiple types for a variable) (Type narrowing is used to get the common properties of multiple types)
// function kgToLbs(weight: number | string): number{
//     // weight.  // Here we will get only common properties of number and string because we have used type UNION and to solve it we use
//     // *** TYPE NATROWING ***
//     if(typeof weight === "number")
//         return weight * 2.2
//     else
//         return parseFloat(weight) * 2.2
// }
// console.log(kgToLbs(10))
// console.log(kgToLbs("10"))
// INTERSECTION TYPES(symbol: &) IN TYPESCRIPT ::: (Intersection types are used to combine multiple types into one type)
// type Draggable = {
//     drag: () => void
// }
// type Resizable = {
//     resize: () => void
// }
// type UIWidget = Draggable & Resizable
// const myWidget: UIWidget = {
//     drag: () => console.log("Dragging"),
//     resize: () => console.log("Resizing")
// }
// LITERAL TYPES IN TYPESCRIPT ::: (Literal types are used to limit the exact values which can be assigned to a variable)
// let myAge: 20 = 20 // For Number Literal : Here value after colon is Literal and it can only be 20
// type Age = 20 | 30 | 40  // Better way to do above thing
// let myRealAge: Age = 20  // Value can be 20, 30 or 40
// type MetricUnit = "kg" | "lbs" | "m" | "cm"  // For String Literal
// let myUnit: MetricUnit = "kg"  // Value can be "kg", "lbs", "m" or "cm"
// NULLABLE TYPES IN TYPESCRIPT ::: (Nullable types are used to allow null values for a variable)
// function greet(name: string | null | undefined){
//     if(name)
//     console.log("Hi, " + name.toUpperCase())
// }
// greet(null) // This will give an error because null is not allowed in typescript by default
// // To solve this we use "strictNullChecks" in tsconfig.json file or set type of name to null
// greet(undefined) // This will also give an error to solve it do as above
// greet("Ali")
// OPTIONAL CHAINING (symbol = ?) IN TYPESCRIPT ::: (Optional chaining is used to access the properties of an object which may not exist)
// type Customer = {
//   birthday: Date;
// };
// function getCustomer(id: number): Customer | null | undefined {
//     return id === 0 ? null : {birthday: new Date()} 
// }
// let customer = getCustomer(1)
// // if(customer !== null && customer !== undefined)
//     // console.log(customer?.birthday)
// // (Optional Property Access Operator) ::: Better way to do above thing
// console.log(customer?.birthday?.getFullYear()) // ?. is chaining and ? is optional chaining
// (Optional Element Access Operator) ::: UseFul for arrays
// let arr = [1, 2, 3]
// console.log(arr?.[0]) // This will give 1
// (Optional Call Operator) ::: UseFul for functions
let log = null;
log === null || log === void 0 ? void 0 : log("Hello"); // This will give Hello
// log?.(null) // This will give null
//# sourceMappingURL=index.js.map