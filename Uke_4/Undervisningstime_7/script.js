//Konvertering fra string til number
function convertingStringToNumber() {
  console.log(Number("25.8"));
  console.log(parseInt("25.8"));
}

function convertingStringToNumbersWithText() {
  console.log(Number("25px"));
  console.log(parseInt("25px"));
}

//ToFixed() - antall desimaler
function toFixedExample() {
  let temperature = 21.6789;

  console.log(temperature.toFixed(0));
  console.log(temperature.toFixed(1));
  console.log(temperature.toFixed(2));
}

// toLocaleString() kan formatere tall
// slik de vanligvis skrives i et bestemt land.
function toLocaleStringExample() {
  let number = 1234567.89;

  console.log(number.toLocaleString("nb-NO"));
}

// Vi kan også formatere penger:
function toLocaleStringCurrencyExample() {
  let price = 2499;

  console.log(
    price.toLocaleString("nb-NO", {
      style: "currency",
      currency: "NOK",
    }),
  );
}

// round() avrunder til nærmeste heltall.
function roundExample() {
  console.log(Math.round(4.4));
  console.log(Math.round(4.6));
}

// ceil() avrunder OPP til nærmeste heltall.
function celiExample() {
  console.log(Math.ceil(4.1));
  console.log(Math.ceil(4.9));
}

// floor() avrunder NED til nærmeste heltall.
function floorExample() {
  console.log(Math.floor(4.1));
  console.log(Math.floor(4.9));
}

// Math.min() finner det minste tallet.
// Math.max() finner det største tallet.
function minMaxExample() {
  console.log(Math.min(5, 2, 10, 3));
  console.log(Math.max(5, 2, 10, 3));
}

// Math.random() lager et tilfeldig desimaltall.
function mathRandomExample() {
  console.log(Math.random());

  let randomNumber = Math.floor(Math.random() * 10);

  let randomNumber2 = Math.floor(Math.random() * 10) + 1;

  console.log();
}

// Tilfeldig tall mellom min og max
function mathExampleWithMinMax() {
  let min = 5;
  let max = 10;

  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  console.log(randomNumber);
}
