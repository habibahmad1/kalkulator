let expression = "";

function clearDisplay() {
  document.getElementById("display").value = "";
  expression = "";
}

function appendInput(input) {
  expression += input;
  document.getElementById("display").value = expression;
}

function calculateResult() {
  try {
    const result = eval(expression);
    document.getElementById("display").value = result;
    expression = result.toString();
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

function calculatePercentage() {
  try {
    const result = eval(expression) / 100;
    document.getElementById("display").value = result;
    expression = result.toString().value;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
