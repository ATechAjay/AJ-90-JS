const empList = document.querySelector(".employee_list");

const employeeContacts = [
  "Ajay:2232322",
  "Rohan:3453456",
  "Prince:7654322",
  "Sonal:9998769",
  "Jiya:9384975",
];

// Approach 1
let empName = "";
for (const emp of employeeContacts) {
  empName += emp.split(":")[0] + ", ";
}

// Approach 2
// Robust way!
// const empName = employeeContacts.map((item) => item.split(":")[0]);
// empList.textContent = empName.join(", ");
console.log(empName);
empList.textContent = empName;

// console.log(test.join(", "));

if (false) {
  console.log("Not executed");
} else if (true) {
  console.log("Executed");
} else {
  console.log("Not executed");
}
