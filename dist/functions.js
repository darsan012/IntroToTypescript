"use strict";
function randomFunc(income) {
    console.log(income);
    return "shyam";
}
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
calculateTax(50000, 2025);
calculateTax(50000);
//# sourceMappingURL=functions.js.map