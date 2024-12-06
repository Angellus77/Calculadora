let a=7;
let b=5;

let operacion = "suma";

function realizarOperacion(num1,num2,operacion){
    if (operacion=="suma"){
        return (num1+num2);
    }else if(operacion=="resta"){
        return (num1-num2);
    }else if(operacion=="multiplicacion"){
        return (num1*num2);
    }else if(operacion=="division"){
        if (num2==0){
            alert("no se puede dividir por cero");
            return
        }
        return (num1/num2);
    }else {
        alert("operacion no disponible");
    }
}
alert(realizarOperacion(a,b,operacion));
let continueCalculating=true;

function sum(a, b) {
    return a + b;
  }
  function sub(a, b) {
    return a - b;
  }
  function mul(a, b) {
    return a * b;
  }
  function div(a, b) {
    if (b === 0) {
      return "no se puede dividir por cero";
    } else {
      return a / b;
    }
  }

while(continueCalculating){
    let num1 = parseFloat(prompt("ingrese el primer numero: "));
    let num2 = parseFloat(prompt("ingrese el segundo numero: "));
    let operator = prompt("ingrese la operacion (+, -, *, /) o 'salir' para salir : ");

    if (operator === "salir") {
      continueCalculating = false;
      alert("adiós");
      break;
    }

    let result;
    switch (operator) {
      case "+":
        result = sum(num1, num2);
        break;
      case "-":
        result = sub(num1, num2);
        break;
      case "*":
        result = mul(num1, num2);
        break;
      case "/":
        result = div(num1, num2);
        break;
      default:
        alert("operación inválida");
        continue;
    }

    alert(`el resultado es ${result}`);
    let otraOperacion=prompt("¿desea continuar con otra operación?(s/n): ");
    if (otraOperacion=="n"){
        continueCalculating = false;
      alert("adiós");

    }
    
}
