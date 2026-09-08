// function storForbokstav(navn){
//  return navn[0].toUpperCase() + navn.slice(1).toLowerCase();
// }

// function lagBrukerNavn(fulltNavn){
//    return fulltNavn.trim().toLowerCase().replaceAll(" ", ".");
//     //fjerne mellomrom 
//     //små bokstaver
//     //bytte mellomrom med punktum
// }

// // ---------- PROPERTY ----------
// "hello".length;                 // 5    – number of characters

// // ---------- READ A CHARACTER ----------
// "hello"[1];                     // "e"  – shorthand for charAt
// "hello".at(-1);                 // "o"  – like charAt, but supports negative index
// "hello".charAt(1);              // "e"  – character at a position (0-based)
// "hello".charCodeAt(0);          // 104  – number code behind the character
// "😀".codePointAt(0);           // 128512 – full Unicode code (handles emoji)

// // ---------- SEARCH ----------
// "hello".includes("ell");        // true – does it contain this?
// "banana".indexOf("a");          // 1    – position of first match (-1 if none)
// "banana".lastIndexOf("a");      // 5    – position of last match
// "hello".startsWith("he");       // true – does it start with this?
// "hello".endsWith("lo");         // true – does it end with this?
// "hello".search(/l/);            // 2    – position of first regex match (-1 if none)

// // ---------- EXTRACT A PIECE ----------
// "hello".slice(1, 3);            // "el"  – from..to (end excluded), allows negatives
// "hello".substring(1, 3);        // "el"  – like slice, but no negative numbers
// "hello".substr(1, 3);           // "ell" – (start, length) – DEPRECATED, avoid
// "a,b,c".split(",");             // ["a","b","c"] – string → array

// // ---------- TRANSFORM ----------
// "hello".toUpperCase();          // "HELLO"
// "HELLO".toLowerCase();          // "hello"
// "  hi  ".trim();                // "hi"     – trims both ends
// "  hi  ".trimStart();           // "hi  "   – trims left
// "  hi  ".trimEnd();             // "  hi"   – trims right
// "5".padStart(3, "0");           // "005"    – pad to length from the left
// "5".padEnd(3, "0");             // "500"    – pad to length from the right
// "ab".repeat(3);                 // "ababab"
// "a-a".replace("a", "X");        // "X-a"    – first match only (with a string)
// "a-a".replaceAll("a", "X");     // "X-X"    – every match
// "foo".concat("bar");            // "foobar" – same idea as using +

