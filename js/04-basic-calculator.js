/*eslint-env browser */

//var num1 = parseInt(x, 10);
//var num2 = parseInt(y, 10);


function calculate(a, b, c) {
    var x =         window.prompt("Enter a number.");
    var y =         window.prompt('Enter another number.');
    var operator =  window.prompt('Would you like to add, subtract, multiply, or divide?');
 switch(operator)
    {
     case 'add': 
        z = x + y;
        window.alert(z);    
        break;     
     case 'subtract': 
        z = x - y;    
        break;
     case 'multiply': 
        z = x * y;
        break;
     case 'divide': 
        z = x / y;
        break;
    }        
}
