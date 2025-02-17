function appendValue(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  const display = document.getElementById("display");
  try {
    if (display.value.includes("/0")) {
      throw new Error("Division by zero is not allowed");
    }
    display.value = eval(display.value);
  } catch {
    display.value = "Tidak bisa dibagi dengan 0";
  }
}

function calculatePercentage() {
  const display = document.getElementById("display");
  try {
    display.value = parseFloat(display.value) / 100;
  } catch {
    display.value = "error";
  }
}
