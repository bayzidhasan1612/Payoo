document.getElementById("cashout-btn").addEventListener("click", function () {
  // 1. get the agent number and validate it
  const cashoutNumberInput = document.getElementById("cashout-number");
  const cashoutNumber = cashoutNumberInput.value;
  console.log(cashoutNumber);
  if(cashoutNumber.length != 11){
    alert('Invalid Agent Number')
    return;
  }

  // 2. get the amount
  const cashoutAmountInput = document.getElementById("cashout-amount");
  const cashoutAmount = cashoutAmountInput.value;
  console.log(cashoutAmount);

  // get the current balance
  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;
  console.log(balance);

  // calculate newBalance
  const newBalance = Number(balance) - Number(cashoutAmount);
  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }

  //   get the pin and verify
  const cashoutPinNumberInput = document.getElementById("cashout-pin");
  const cashoutPinNumber = cashoutPinNumberInput.value;

  if (cashoutPinNumber == "1234") {
    alert("Cashout Successful");
    console.log("newBalance", newBalance);
    balanceElement.innerText = newBalance;
  } else {
    alert("Invalid Pin Number");
    return;
  }
});
