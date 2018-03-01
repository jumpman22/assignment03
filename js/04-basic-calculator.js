/*eslint-env browser */

function calculate() {
    'use strict';
    var x =         parseInt(window.prompt("Enter a number."), 10);
    var y =         parseInt(window.prompt('Enter another number.'), 10);
    var operator =  window.prompt('Would you like to add, subtract, multiply, or divide?');
    var total;
 switch(operator)
    {
     case 'add': 
        total = x + y;
        window.console.log(total);
        break;     
     case 'subtract': 
        total = x - y;
        window.console.log(total);
        break;
     case 'multiply': 
        total = x * y;
        window.console.log(total);    
        break;
     case 'divide': 
        total = x / y;
        window.console.log(total);
        break;
     default: 
        window.alert("You entered wrong command!");
        calculate();    
        break;
    }
    return total;
}
calculate();