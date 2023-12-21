// Array of expenses
const expenses = [700, 1000, 2000, 1000];
const insurance = 700;
const vehicle = 1000;
const fooding = 2000;
const extra = 1000;
const salary= 30000;
const pfbycomp= 3000;
const share= 3000;
const fd_interest= 300;

// Array of income
const income = [30000, 3000, 300];
let totalIncome = 0;

for (let i = 0; i < income.length; i++) {
  totalIncome += income[i];
}

const tds = 0.01 * totalIncome;
const pf = 0.1 * totalIncome;

const totalExpenses = pf + tds + insurance + vehicle + fooding + extra;
const netIncome = totalIncome - totalExpenses;
const grossSalary= salary + pfbycomp;
const netSalary= salary - pfbycomp - fd_interest;


console.log("Providend Fund", pf);

console.log("Array of income", income);
console.log(" Array of Expenses:", expenses);
console.log("vehicle:", vehicle);
console.log("Fooding", fooding);
console.log("Extra", extra);
console.log("Insurance", insurance);
console.log("Total income", totalIncome);
console.log("TDS", tds);



console.log("Total Expenses:", totalExpenses)
console.log("Net income", netIncome)

console.log("The gross salary is:", grossSalary);
console.log("The net salary is:", netSalary);



