import { data } from "./components/data.js";
import { renderEmployeeCard } from "./components/employeeDiv.js";
import { renderHeader } from "./components/headerDiv.js";
import { renderFooter } from "./components/footerDiv.js";

const rootDiv = document.getElementById("root");
data.then((employees) => {
  employees.forEach((employee) => {
    rootDiv.appendChild(renderEmployeeCard(employee));
  });
});

document.getElementById("header").appendChild(renderHeader());
document.getElementById("footer").appendChild(renderFooter());
