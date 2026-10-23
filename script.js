document.writeln("<p>");

let a = parseFloat(prompt("podaj a:"));
let b = parseFloat(prompt("podaj b:"));
let c = parseFloat(prompt("podaj c:"));
let d = parseFloat(prompt("podaj d:"));

// Zad 1
let ab = 0;
if (b == 0) {
    document.writeln("nie wolno dzielić przez 0<br>");
} else {
    ab = a/b;
    document.writeln(`${a} / ${b} = ${ab}<br>`);
}

// Zad 2
// a/b + c/d
let cd = 0;
if (d == 0) {
    document.writeln("nie wolno dzielić przez 0<br>");
} else {
    cd = c/d;
    document.writeln(`${a} / ${b} + ${c} / ${d} = ${ab + cd}<br>`);
}

// Zad 3
// (a+6) / (b – 4)
let a2 = a+6;
let b2 = b-4;

if (b2 == 0) {
    document.writeln("nie wolno dzielić przez 0<br>");
} else {
    document.writeln(`(${a} + 6) / (${b} - 4)= ${a2 + b2}<br>`);
}

// Zad 4
if (a % 2 == 0) {
    document.writeln("a jest parzyste<br>");
} else {
    document.writeln("a nie jest parzyste<br>");
}

// Zad 5
let g = parseFloat(prompt("podaj g:"));
let h = parseFloat(prompt("podaj h:"));

if (g % h == 0) {
    document.writeln("g jest podzielne przez h<br>");
} else {
    document.writeln("g nie jest podzielne przez h<br>");

}
// Zad 6
let i = parseFloat(prompt("podaj i:"));

if (i > 0) {
    document.writeln("i jest dodatnie<br>");
} else if (i < 0){
    document.writeln("i jest ujemne<br>");
} else {
    document.writeln("i jest równe 0<br>");
}
// Zad 7
let l1 = parseFloat(prompt("podaj l1:"));
let l2 = parseFloat(prompt("podaj l2:"));
let l3 = parseFloat(prompt("podaj l3:"));

let small = 0;
let medium = 0;
let big = l1;

if (l2 > big){
    medium = big;
    big = l2;
} else {
    medium = l2;
}
if (l3 > big) {
    small = medium;
    medium = big;
    big = l3;
} else {
    if (l3 > medium) {
        small = medium;
        medium = l3;
    } else {
        small = l3;
    }
}
document.writeln(`${l1}, ${l2}, ${l3} największa = ${big}<br>`);
// Zad8
document.writeln(`${small},${medium},${big}`);

document.writeln("</p>");