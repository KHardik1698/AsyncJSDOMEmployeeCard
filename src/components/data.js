const url =
  "https://niravkpatel28.github.io/json-data-server/employees/employees.json";

// immediately invoked function expression IIFE
export const data = (async () => {
  let response = await axios.get(url);
  return response.data;
})();
