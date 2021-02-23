//Partie1
let number1 = "2";
let number2 = "5";

addStrings(number1, number2);

function addStrings(a, b) {
    let num1 = parseInt(a);
    let num2 = parseInt(b);
    let r = num1 + num2;
    let result = r.toString();
    console.log(result);
    return result;
}

//Partie2
add("a", "b", 3);

function add(a, b, c) {
    if (typeof(a) != "number") {
        a = 0;
    }
    if (typeof(b) != "number") {
        b = 0;
    }
    if (typeof(c) != "number") {
        c = 0;
    }
    let r = a + b + c;
    console.log(r);
}
