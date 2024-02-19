let employee :{
    id:number,
    name:string } = {id:1, name:''};

// modifying employee
employee.id = 2;
console.log(employee);

// what if we don't want something to change
let newEmployee : {
   readonly id:number,
    name:string } = {id: 1, name:''};

// if we try to update the id it shows the error
// newEmployee.id = 2; Cannot assign to 'id' because it is a read-only property.ts(2540)


// utilizing the type, 
type Students = {
    readonly id: number,
    name:string,
    enrollment: (date: Date)=> void // here void is the return type   
}
// adding methods to the objects
let students : Students = {id:1, name:'Darshan', enrollment: (date: Date)=> {
    console.log(date);
}};

// literal type
let quantity : 50|100 = 50; // can assign value that is 50 or 100