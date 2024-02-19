// data types
// JS -> number, string, boolean, null, undefined, object 
// Extends Js types with any, unknown, never, enum , tuple
let sales: number = 123_456_789;
let course: string = 'Typescript';
let is_published: boolean = false;

// we cannot assign value of one data type to another
// sales = "random"; // this gives the error

// any type
let level;
// we can assign value of any data type to the level
level = "hello";
level = 1;

// arrays in typescript
let myArray : number[] = [1, 2, 3, 4, 5];
let arryStr : string[] = ["apple", "orange", "guava"];

// tuples -> fixed length arrays, used when working with key values pairs
let user: [number , string] = [1, "apple"];

// Enums -> list of related constants
// PascalCase
enum Size {Small, Medium, Large}; // automatically small = 0, medium = 1, large = 2

enum newSize {Small = 1, Medium, Large}; // sets small = 1, medium = 2, large = 3

// accessing the values
let mySize: Size = Size.Medium;

console.log(mySize);
