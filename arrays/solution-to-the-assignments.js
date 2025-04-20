let monthlyExpenses = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];
let total = 0;
for (i = 0; i < monthlyExpenses.length; i++) {
  total += monthlyExpenses[i];
}
let average = total / monthlyExpenses.length;
console.log(average);
