let number1 = "2";
let number2 = "5";

add(number1, number2);

function add(a, b) {
    let num1 = parseInt(a);
    let num2 = parseInt(b);
    let r = num1 + num2;
    let result = r.toString();
    console.log(result);
    return result;
}