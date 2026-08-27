//Modell
const app = document.getElementById("app");
let points = 0;
let clicks = 0;
let amountToAdd = 1;
let upgradesBought = 0;
let upgradePrice1 = 10;
let upgradePrice2 = 20;

//View
updateView();
function updateView() {
  app.innerHTML = /*HTML*/ `
    <h2>${points}</h2>
    <button onclick="addPoints()">click</button>
    <div>
      <h3>Upgrades!</h3>
      <div>
        ${generateButton(upgradePrice1, 5)}
        ${generateButton(upgradePrice2, 10)}
      </div>
    </div>
    <div>${generateDisplay()}</div>
  `;
  checkUpgradeButtons();
}

function generateDisplay() {
  return /*HTML*/ `
    <div>Total clicks: ${clicks}</div>
    <div>Upgrades bought: ${upgradesBought}</div>
  `;
}

function generateButton(price, amount) {
  return /*HTML*/ `
      <span>Price: ${price}</span>
      <button ${checkIfDisabled(price) ? "disabled" : ""} onclick="addUpgrade(${amount}, ${price})">+${amount}</button>
  `;
}

//Controller
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
  updateView();
}

function addPoints() {
  points += amountToAdd;
  clicks++;
  updateView();
}

function checkIfDisabled(price) {
  return points < price;
}
