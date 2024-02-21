type Customer = {
    birthday?: Date
};

function getCustomer(id : number) : Customer | null {
    return id == 0 ? null : {birthday: new Date()};
}

let customer = getCustomer(1);
// console.log(customer.birthday); // here it shows customer might be null error
// using optional property access operator
console.log(customer?.birthday?.getFullYear()); 