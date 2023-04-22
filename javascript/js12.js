var operador1 = 1;
var operador2 = 1;
var resultado;

while (operador1 <= 49 || operador1 >= 101) {
  operador1 = parseInt(prompt("Escribe por favor un número positivo entre 50 y 100")
  );
}

while (operador2 <= 9 || operador2 >= 21 ) {
  operador2 = parseInt(prompt("Escribe por favor un número positivo entre 10 y 20")
  );
}

resultado = operador1 + operador2;
alert("La suma de esos 2 números es: " + resultado);
resultado = operador1 - operador2;
alert("La resta de esos 2 números es: " + resultado);
resultado = operador1 * operador2;
alert("La multipliacion de esos 2 números es: " + resultado);
resultado = operador1 / operador2;
alert("La Division de esos 2 números es: " + resultado);
alert(
  "Este ejercicio se programó con JavaScript y lo programó: Jesus Emmanuel Santos Chavez"
);
