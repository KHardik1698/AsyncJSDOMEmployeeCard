import { data } from "./components/data.js";
import { renderEmployeeCard } from "./components/employeeDiv.js";
import { renderHeader } from "./components/header.js";

const rootDiv = document.getElementById("root");
data.then((employees) => {
  employees.forEach((employee) => {
    rootDiv.appendChild(renderEmployeeCard(employee));
  });
});

document.getElementById("header").appendChild(renderHeader());
