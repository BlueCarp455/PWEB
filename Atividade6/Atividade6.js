var escolhaInput = prompt(
  "Escolha uma opção: \n\n[1] Pedra\n\n[2] Papel\n\n[3] Tesoura"
);

var escolhaUsuario = "";

switch (escolhaInput) {
  case "1":
    escolhaUsuario = "Pedra";
    break;
  case "2":
    escolhaUsuario = "Papel";
    break;
  default:
    escolhaUsuario = "Tesoura";
    break;
}

var randomPC = Math.random();

var escolhaPC = "Papel";

if (randomPC >= 0 && randomPC < 0.33) {
  escolhaPC = "Pedra";
} else if (randomPC >= 0.33 && randomPC < 0.66) {
  escolhaPC = "Tesoura";
}

alert(
  "Escolha Computador: " +
    escolhaPC +
    "\nSua escolha: " +
    escolhaUsuario
);

var ganhador = "";

if (escolhaUsuario === escolhaPC) {
  ganhador = "EMPATE";
} else if (escolhaUsuario === "Papel") {
  ganhador = "USUARIO";
  if (escolhaPC === "Tesoura") {
    ganhador = "COMPUTADOR";
  }
} else if (escolhaUsuario === "Pedra") {
  ganhador = "USUARIO";
  if (escolhaPC === "Papel") {
    ganhador = "COMPUTADOR";
  }
} else {
  ganhador = "USUARIO";
  if (escolhaPC === "Pedra") {
    ganhador = "COMPUTADOR";
  }
}

alert("Resultado: " + ganhador);