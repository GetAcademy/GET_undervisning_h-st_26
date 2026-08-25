let points = 0;
let clicks = 0;
let amountToAdd = 1;
let upgradesBought = 0;
let upgradePrice1 = 10;
let upgradePrice2 = 20;

updateDisplay();
function addPoints() {
  points += amountToAdd;
  clicks++;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("points").innerHTML = points;
  document.getElementById("pointsDisplay").innerHTML = generateDisplay();
  document.getElementById("upgrades").innerHTML = /*HTML*/ `
    ${generateButton(upgradePrice1, 5)}
    ${generateButton(upgradePrice2, 10)}
  `;
  checkUpgradeButtons();
}

function generateDisplay() {
  return /*HTML*/ `
    <div>Total clicks: ${points}</div>
    <div>Upgrades bought: ${upgradesBought}</div>
  `;
}

function addUpgrade(amount, price) {
  upgradesBought++;
  amountToAdd += amount;
  points -= price;
  if (amount == 5) {
    upgradePrice1 = price * 2;
  } else if (amount == 10) {
    upgradePrice2 = price * 2;
  } else {
    console.log("Feil upgrade-knapp!");
  }
  updateDisplay();
}

function generateButton(price, amount) {
  return /*HTML*/ `
      <span>Price: ${price}</span>
      <button ${checkIfDisabled(price) ? "disabled" : ""} onclick="addUpgrade(${amount}, ${price})">+${amount}</button>
  `;
}

function checkIfDisabled(price) {
  return points < price;
}
