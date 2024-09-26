function welcome() {
  var name = "";
  do {
    name = window.prompt("What is your name?");
    if (name === "" || name === null) {
      window.alert("Please enter your name!");
    }
  } while (name === "" || name === null);

  var p = document.getElementById("p1");
  p.innerHTML = `Welcome to your bank account, ${name}!`;
  p.style.font = "normal 18pt Arial";
}
welcome();

function withdraw() {
  var withdrawInput = parseFloat(document.getElementById("withdraw").value);
  var balance = parseFloat(document.getElementById("balance").innerText);
  var res = document.getElementById("res");

  if (withdrawInput > 0 && withdrawInput <= balance) {
    balance -= withdrawInput;
    res.innerHTML = `Successful withdrawal! New Balance: ${balance}$`;
    document.getElementById("balance").innerText = balance;
  } else {
    res.innerHTML = "Insufficient or invalid amount!";
  }
}

function deposit() {
  var depositInput = parseFloat(document.getElementById("deposit").value);
  var balance = parseFloat(document.getElementById("balance").innerText);
  var res = document.getElementById("res");

  if (depositInput > 0) {
    balance += depositInput;
    res.innerHTML = `Deposit made successfully! New balance: ${balance}$`;
    document.getElementById("balance").innerText = balance;
  } else {
    res.innerHTML = "Invalid deposit amount!";
  }
}
