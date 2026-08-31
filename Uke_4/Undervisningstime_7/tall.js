// ======================================================
// 1. HELTALL VS DESIMALTALL
// ======================================================

// I JavaScript bruker vi datatypen "number"
// både for heltall og desimaltall.

let heltall = 10;
let desimaltall = 10.5;

console.log(heltall); // 10
console.log(desimaltall); // 10.5

console.log(typeof heltall); // "number"
console.log(typeof desimaltall); // "number"

// ======================================================
// 2. PLUSS, MINUS, GANGE, DELE, PARENTESER OG MODULUS
// ======================================================

// Vanlige regneoperatorer:

console.log(10 + 5); // 15 - pluss
console.log(10 - 5); // 5  - minus
console.log(10 * 5); // 50 - gange
console.log(10 / 5); // 2  - dele

// JavaScript følger vanlige regneregler.
// Gange og dele regnes før pluss og minus.

console.log(10 + 5 * 2); // 20

// Parenteser kan brukes for å bestemme
// hva som skal regnes ut først.

console.log((10 + 5) * 2); // 30

// MODULUS
// % gir oss resten etter en divisjon.

console.log(10 % 3); // 1

// 10 / 3 = 3 med 1 i rest.

// Modulus kan for eksempel brukes for å
// sjekke om et tall er et partall.

console.log(8 % 2); // 0
console.log(7 % 2); // 1

// Hvis resten er 0, kan tallet deles på 2.

// ======================================================
// 3. OMGJØRING
// ======================================================

// Noen ganger må vi gjøre om en verdi
// fra én datatype til en annen.

// Dette er tekst:
let tekstTall = "42";

console.log(typeof tekstTall); // "string"

// Vi kan gjøre teksten om til et tall:
let ekteTall = Number(tekstTall);

console.log(ekteTall); // 42
console.log(typeof ekteTall); // "number"

// ======================================================
// 4. TEKST TIL TALL: Number() OG parseInt()
// ======================================================

// ----------------------
// Number()
// ----------------------

// Number() prøver å gjøre HELE teksten om til et tall.

let tall1 = Number("25");
console.log(tall1); // 25

let tall2 = Number("25.8");
console.log(tall2); // 25.8

// Hvis teksten ikke kan gjøres om til et tall,
// får vi NaN.

let tall3 = Number("25px");
console.log(tall3); // NaN

let tall4 = Number("hei");
console.log(tall4); // NaN

// NaN betyr:
// Not a Number

// ----------------------
// parseInt()
// ----------------------

// parseInt() leser et HELTALL fra starten av teksten.

console.log(parseInt("25")); // 25

// Desimalene blir fjernet:
console.log(parseInt("25.8")); // 25

// parseInt() kan lese tallet selv om det
// kommer tekst etter tallet:

console.log(parseInt("25px")); // 25

// Men teksten må starte med et tall:

console.log(parseInt("px25")); // NaN

// FORSKJELLEN:

console.log(Number("25.8")); // 25.8
console.log(parseInt("25.8")); // 25

console.log(Number("25px")); // NaN
console.log(parseInt("25px")); // 25

// ======================================================
// 5. TALL TIL TEKST
// ======================================================

let pris = 1234.567;

// ----------------------
// "" + tall
// ----------------------

// Hvis vi legger sammen tekst og tall,
// blir resultatet tekst.

let prisSomTekst = "" + pris;

console.log(prisSomTekst); // "1234.567"
console.log(typeof prisSomTekst); // "string"

// ----------------------
// toFixed()
// ----------------------

// toFixed() bestemmer hvor mange desimaler
// vi ønsker å vise.

console.log(pris.toFixed(2)); // "1234.57"

// Viktig:
// Resultatet fra toFixed() er TEKST.

console.log(typeof pris.toFixed(2)); // "string"

// Flere eksempler:

let temperatur = 21.6789;

console.log(temperatur.toFixed(0)); // "22"
console.log(temperatur.toFixed(1)); // "21.7"
console.log(temperatur.toFixed(2)); // "21.68"

// ----------------------
// toLocaleString()
// ----------------------

// toLocaleString() kan formatere tall
// slik de vanligvis skrives i et bestemt land.

let stortTall = 1234567.89;

console.log(stortTall.toLocaleString("nb-NO"));

// For eksempel:
// "1 234 567,89"

// Vi kan også formatere penger:

let varePris = 2499;

console.log(
  varePris.toLocaleString("nb-NO", {
    style: "currency",
    currency: "NOK",
  }),
);

// For eksempel:
// "2 499,00 kr"

// ======================================================
// 6. Math
// ======================================================

// Math er et innebygd objekt i JavaScript.
//
// Det inneholder mange nyttige matematiske
// funksjoner og verdier.

// PI:
console.log(Math.PI);
// 3.141592...

// Kvadratrot:
console.log(Math.sqrt(16));
// 4

// Potens:
console.log(Math.pow(2, 3));
// 8

// Potens kan også skrives slik:
console.log(2 ** 3);
// 8

// ======================================================
// 7. round, ceil OG floor
// ======================================================

// ----------------------
// Math.round()
// ----------------------

// round() avrunder til nærmeste heltall.

console.log(Math.round(4.4)); // 4
console.log(Math.round(4.6)); // 5

// ----------------------
// Math.ceil()
// ----------------------

// ceil() avrunder OPP til nærmeste heltall.

console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(4.9)); // 5

// ----------------------
// Math.floor()
// ----------------------

// floor() avrunder NED til nærmeste heltall.

console.log(Math.floor(4.1)); // 4
console.log(Math.floor(4.9)); // 4

// En enkel huskeregel:
//
// round = vanlig avrunding
// ceil  = opp
// floor = ned

// ======================================================
// 8. Math.min() OG Math.max()
// ======================================================

// Math.min() finner det minste tallet.

console.log(Math.min(5, 2, 10, 3));
// 2

// Math.max() finner det største tallet.

console.log(Math.max(5, 2, 10, 3));
// 10

// Vi kan også bruke min og max på en array.
// Da bruker vi ... foran arrayen.

let tallListe = [4, 8, 1, 12, 6];

console.log(Math.min(...tallListe));
// 1

console.log(Math.max(...tallListe));
// 12

// ======================================================
// 9. Math.random()
// ======================================================

// Math.random() lager et tilfeldig desimaltall.
//
// Tallet er fra og med 0,
// men mindre enn 1.

console.log(Math.random());

// Vi kan for eksempel få:
// 0.728391
// 0.12345
// 0.98765

// ----------------------
// Tilfeldig tall fra 0 til 9
// ----------------------

let tilfeldig0Til9 = Math.floor(Math.random() * 10);

console.log(tilfeldig0Til9);

// Math.random() gir 0 - 0.999...
//
// * 10 gir 0 - 9.999...
//
// Math.floor() fjerner desimalene.
//
// Resultatet blir derfor:
// 0, 1, 2, 3, 4, 5, 6, 7, 8 eller 9

// ----------------------
// Tilfeldig tall fra 1 til 10
// ----------------------

let tilfeldig1Til10 = Math.floor(Math.random() * 10) + 1;

console.log(tilfeldig1Til10);

// + 1 gjør at området flyttes fra
// 0-9 til 1-10.

// ----------------------
// Tilfeldig tall mellom min og max
// ----------------------

let min = 5;
let max = 10;

let tilfeldigTall = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(tilfeldigTall);

// Resultatet blir et tilfeldig heltall
// fra 5 til 10.
