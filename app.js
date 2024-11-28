let display = document.querySelector('.cal-output');
  let calculation = '';
  function press(num) {
   if (num === '=') {
    calculation = eval(calculation);
    display.value = calculation;
   } else if (num === 'DE') {
    calculation = '';
    display.value = '';
   } else {
    calculation += num;
    display.value = calculation;
   }
  }
  function clearDisplay() {
   calculation = '';
   display.value = '';
  }