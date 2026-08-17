// ========================================
// ARITMETISKE OPERATORER
// ========================================

console.log(10 + 5); // 15  - addisjon
console.log(10 - 5); // 5   - subtraksjon
console.log(10 * 5); // 50  - multiplikasjon
console.log(10 / 5); // 2   - divisjon
console.log(10 % 3); // 1   - modulus (rest etter divisjon)

// ========================================
// SAMMENLIGNINGSOPERATORER
// ========================================

console.log(5 == "5"); // true  - lik verdi
console.log(5 === "5"); // false - lik verdi OG datatype

console.log(5 != "5"); // false - ikke lik verdi
console.log(5 !== "5"); // true  - ikke lik verdi eller datatype

console.log(10 >= 5); // true  - større enn eller lik
console.log(10 <= 5); // false - mindre enn eller lik
console.log(10 < 20); // true  - mindre enn
console.log(10 > 20); // false - større enn

// ========================================
// LOGISKE OPERATORER
// ========================================

console.log(true && true); // true  - OG: begge må være true
console.log(true && false); // false

console.log(true || false); // true  - ELLER: minst én må være true
console.log(false || false); // false

console.log(!true); // false - IKKE: snur boolean-verdien
console.log(!false); // true

// Eksempel med flere betingelser

let alder = 20;
let harBillett = true;

console.log(alder >= 18 && harBillett); // true

// ========================================
// TILORDNINGSOPERATORER
// ========================================

let tall = 10;

tall += 5; // samme som: tall = tall + 5
console.log(tall); // 15

tall -= 5; // samme som: tall = tall - 5
console.log(tall); // 10

tall *= 2; // samme som: tall = tall * 2
console.log(tall); // 20

tall /= 4; // samme som: tall = tall / 4
console.log(tall); // 5

tall %= 3; // samme som: tall = tall % 3 - modulus (rest etter divisjon)
console.log(tall); // 2

// Vanlig tilordning

let poeng = 10; // = gir variabelen en verdi

// Øke eller redusere med 1

poeng++; // samme som: poeng = poeng + 1
console.log(poeng); // 11

poeng--; // samme som: poeng = poeng - 1
console.log(poeng); // 10

// ========================================
// TERNARY OPERATOR
// ========================================

// Syntaks:
// logiskVerdi ? verdiHvisSann : verdiHvisUsann

let temperatur = 20;

let melding = temperatur >= 20 ? "Det er varmt" : "Det er kaldt";

console.log(melding); // "Det er varmt"

// Ternary kan for eksempel erstatte en enkel if/else:

let erMyndig = alder >= 18 ? "Ja" : "Nei";

console.log(erMyndig); // "Ja"
