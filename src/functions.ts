
// here the : number is the return type

// randumFunc can have return type of any, but for best practice always include return type
function randomFunc(income: number) {
    console.log(income);
    return "shyam";
}

// return type can be void, any or undefined
// making taxYear optional supply ? infront of the taxYear, taxYear?: number
function calculateTax(income: number, taxYear = 2022) : number {
    if(taxYear < 2022){
        return income*1.2;
    }
    // if the income is > 50_000, it return undefined but the return type is number
    return income*1.3;
}

// calling the functions
calculateTax(50000,2025);
calculateTax(50000);