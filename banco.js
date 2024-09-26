function boas_vindas() {
  var nome = "";
  do {
    nome = window.prompt("Qual é o seu nome?");
    if (nome === "" || nome === null) {
      window.alert("Por favor, digite o seu nome!");
    }
  } while (nome === "" || nome === null);
  var p = document.getElementById("p1");
  p.innerHTML = `Bem vindo ao banco S4nt4nd3r, ${nome}!`;
  p.style.font = "normal 16pt Arial";
}
boas_vindas();

function sacar() {
  var saqueInput = parseFloat(document.getElementById("saque").value);
  var saldo = parseFloat(document.getElementById("saldo").innerText);
  var res = document.getElementById("res");

  if (saqueInput <= saldo && saqueInput > 0) {
    saldo -= saqueInput;
    res.innerHTML = "Saque realizado com sucesso! Novo saldo: " + saldo + "$";
    document.getElementById("saldo").innerText = saldo + "$";
  } else {
    res.innerHTML = "Saldo insuficiente ou valor inválido!";
  }
}

function depositar() {
  var depositoInput = parseFloat(document.getElementById("deposito").value);
  var saldo = parseFloat(document.getElementById("saldo").innerText);
  var res = document.getElementById("res");

  if (depositoInput > 0) {
    saldo += depositoInput;
    res.innerHTML = "Depósito realizado com sucesso! Novo saldo: " + saldo + "$";
    document.getElementById("saldo").innerText = saldo + "$";
  } else {
    res.innerHTML = "Valor de depósito inválido!";
  }
}
