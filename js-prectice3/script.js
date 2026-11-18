// -----------Q.1-------------

// const num1 = 20;
// const num2 = 30;
// const num3 = 40;

// if(num1 > num2 && num1 > num3){
//     console.log(`${num1} is the maximum number`);
// }else if(num2 > num1 && num2 > num3){
//     console.log(`${num2} is the maximum number`);
// }else if(num3 > num1 && num3 > num2){
//     console.log(`${num3} is the maximum number`);
// }else{
//     console.log("please enter three distinct valid numbers");
// }

// ---------Q.2-----------

// const num1 = 10;
// const opretor = "*";
// const num2 = 20;

// let result;

// switch(opretor){
//     case "+" :
//     result = num1 + num2;
//     console.log(`${num1} + ${num2} = ${result}`);
//     break;

//     case "-" :
//     result = num1 - num2;
//     console.log(`${num1} - ${num2} = ${result}`);
//     break;

//     case "*" :
//     result = num1 * num2;
//     console.log(`${num1} * ${num2} = ${result}`);
//     break;

//     case "/" :
//     if(num2 === 0){
//         console.log("Error: cannot divide by zero");
//     }else{
//     result = num1 / num2;
//     console.log(`${num1} / ${num2} = ${result}`);}

//     break;

//     default:
//         console.log("Invalide operator!");

// }

// ---------Q.3------------

// const year = 2024;

// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   console.log(`${year} is a leap year.`);
// } else {
//   console.log(`${year} is not a leap year.`);
// }

// -----------Q.4-------------

// const score = 90;

// if (score >= 90 && score<= 100){
//   console.log("Grade A");
// }else if( score>=80 && score<=90){
//   console.log("Grade B");
// }else if( score>= 70 && score<=80){
//   console.log("Grade C");
// }else if(score>=60 && score<=70){
//   console.log("Grade D");
// }else if(score<=60){
//   console.log("F");
// }else{
//   console.log("Invalid Score!");
// }

// ----------Q.5------------

// const month = 2;

// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log("31 days");
//     break;

//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log("30 days");
//     break;

//   case 2:
//     console.log("28 days");
//     break;

//     default:
//       console.log("Invalid month number!");
// }

// ---------Q.6------------

// let ch = '@';

// if (ch.length !== 1) {
//     console.log("Please enter only one character.");
// } else if ("aeiouAEIOU".includes(ch)) {
//     console.log("Vowel");
// } else if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
//     console.log("Consonant");
// } else if (ch >= '0' && ch <= '9') {
//     console.log("Numeric Digit");
// } else {
//     console.log("Special Character");
// }

// ------------Q.7-----------

// let num = 7;

// for (let i = 1; i <= 10; i++) {
//     console.log(num + " x " + i + " = " + (num * i));
// }

// -----------Q.8-------------

// let n = 7;
// let fact = 1;
// let i = 1;

// while (i <= n) {
//     fact = fact * i;
//     i++;
// }

// console.log("Factorial of " + n + " is: " + fact);

// --------------Q.9------------

// let n = 8;

// let a = 0, b = 1;

// console.log("Fibonacci Series:");

// for (let i = 1; i <= n; i++) {
//     console.log(a);

//     let next = a + b;
//     a = b;
//     b = next;
// }

// -----------Q.10--------------

// let num = 345;
// let sum = 0;

// while (num > 0) {
//     sum += num % 10;
//     num = Math.floor(num / 10);
// }

// console.log(`sum of digit = ${sum}`);

// ------------Q.11-------------

// let num = 1;
// let count = 0;

// for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//         count++;
//     }
// }

// if (count === 2) {
//     console.log("Prime Number");
// } else {
//     console.log("Not a Prime Number");
// }

// -----------Q.12------------

let n = 10;

for (let i = 1; i <= n; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }

    console.log(pattern);
}