// var number = 1;
// let text = "Hei på deg";
// const letterA = "A";

// let isOpen = false;
// let isLoggedIn;

// console.log(isLoggedIn);
// isLoggedIn = true;
// isLoggedIn = !isLoggedIn;
// console.log(isLoggedIn);

let points = 0;
let clicks = 0;
let amountToAdd = 1;
let upgradesBought = 0;
let upgradePrice1 = 10;
let upgradePrice2 = 20;

function addPoints() {
  points += amountToAdd;
  clicks++;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("points").innerHTML = points;
  document.getElementById("clicks").innerHTML = clicks;
  document.getElementById("upgradesBought").innerHTML = upgradesBought;
  document.getElementById("upgrade_1_price").innerHTML = upgradePrice1;
  document.getElementById("upgrade_2_price").innerHTML = upgradePrice2;
  checkUpgradeButtons();
}

function addUpgrade(amount, buttonId) {
  upgradesBought++;
  amountToAdd += amount;
  points -= buttonId == "upgrade_1" ? upgradePrice1 : upgradePrice2;
  upgradePrice1 = buttonId == "upgrade_1" ? upgradePrice1 * 2 : upgradePrice1;
  upgradePrice2 = buttonId == "upgrade_2" ? upgradePrice2 * 2 : upgradePrice2;
  updateDisplay();
}

function checkUpgradeButtons() {
  document.getElementById("upgrade_1").disabled =
    points > upgradePrice1 ? false : true;
  document.getElementById("upgrade_2").disabled =
    points > upgradePrice2 ? false : true;
}
