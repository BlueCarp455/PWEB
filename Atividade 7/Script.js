var x;

x = [3];

x[0] = parseFloat(prompt("Informe o primeiro valor"));
x[1] = parseFloat(prompt("Informe o segundo valor"));
x[2]= parseFloat(prompt("Informe o terceiro valor"));

var max = x.reduce(function(a, b) {
    return Math.max(a, b)}
);

alert("Valor máximo " + max.toFixed(2));