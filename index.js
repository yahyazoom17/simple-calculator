const display = document.getElementById("display");

var sign = true;

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
  sign = true;
}

function backSpace() {
  var value = display.value.slice(0, -1);
  display.value = value;
}

function changeSign() {
  if (sign) {
    var value = "-" + display.value;
    display.value = value;
  } else {
    var value = display.value;
    display.value = value;
  }
  sign = false;
}

//fixme: Should fix the undefined results!
function calculate() {
  try {
    var value = eval(display.value);
    if (value == NaN) {
      display.value = "Undefined";
    } else {
      display.value = value;
    }
  } catch (error) {
    display.value = "Error!";
    console.log(error);
  }
}
