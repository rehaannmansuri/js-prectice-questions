// ------------Q.1----------

// let a = 10;
// let b = 20;

// a = a+b;
// b = a-b;
// a = a-b;

// console.log(`After  value of a : ${a}`);
// console.log(`After value of b : ${b}`);

// // -----------Q.2----------

// const redius = 5;
// const pi = 3.14;

// const area = pi * redius * redius;

// console.log('Area of circle : ' + area);


// ----------Q.3---------

// const celsius = 25;
// const fahrenheit = (celsius * 9/5) + 32;
 
// console.log("Temperature in Fahrenheit : ",fahrenheit);

// -------------Q.4-------------

// const number = 15;
// const result = number % 2 === 0 ? "Even" : "Odd";

// console.log(result);

// ---------Q.5---------

// let num = 1;

// if (num % 3 === 0 && num % 5 === 0) {
//     console.log("FizzBuzz");
// }else if (num % 3 === 0) {
//     console.log("Fizz");
// }else if(num % 5 ===0 ){
//     console.log("Buzz");
// }else{
//     console.log(num);

// }

// switch (true){
//     case num % 3 === 0 && num % 5 === 0:
//         console.log("FizzBuzz");
//         break;

//     case num % 3 === 0 :
//         console.log("Fizz");
//         break;

//     case num % 5 === 0 :
//         console.log("Buzz");
//         break;

//     default :
//     console.log(num);
// }

// ---------Q.6------------

// let a = 30;
// let b = 20;
// let c = 40;

// if(a > b  && a > c){
//     console.log(a + " is the largest number");
// }else if(b > a && b > c){
//     console.log(b + " is the largest number");
// }else{
//     console.log(c + " is the largest number");
// }

// -----------Q.7--------

// let age = 20;

// if( age >= 0 && age <= 19){
//     console.log('Child')
// }else if( age >= 13 && age <=19){
//     console.log('Teen');
// }else if (age >= 20 && age <= 59){
//     console.log('Adult')
// }else if(age >= 60){
//     console.log('Senior');
// }else{
//     console.log('Invalid Age');
// }

// --------Q.8---------

// let year = 2025;

// if (year % 400 === 0) {
//     console.log(year + " is a Leap Year");
// }
// else if (year % 100 === 0) {
//     console.log(year + " is not a Leap Year");
// }
// else if (year % 4 === 0) {
//     console.log(year + " is a Leap Year");
// }
// else {
//     console.log(year + " is not a Leap Year");
// }               

// ----------Q.9-----------

// let English = 80, Math = 90, javaScript = 70, java = 80, python = 90;

// let totalMArks = English + Math + javaScript + java + python;

// let percentage = (totalMArks / 500) * 100;
// console.log("Total Marks: " + totalMArks);
// console.log("Percentage: " + percentage + "%");

// if (percentage >= 90) {
//     console.log("Grade: A");
// }else if (percentage >= 75) {
//     console.log("Grade: B");
// }else if (percentage >= 50) {
//     console.log("Grade: C");
// }else {
//     console.log("Fail");
// }

// -----------Q.10-------------

// let color = "green";

// switch (color.toLowerCase()) {
//     case "red":
//         console.log("STOP");
//         break;
//     case "yellow":
//         console.log("WAIT");
//         break;
//     case "green":
//         console.log("GO");
//         break;
// default:
//     console.log("Invalid Color");
// }

// ----------Q.11-------------

// let num = 4;

// for(let i = 1; i <= 10; i++){
//     console.log(`${num} x ${i} = ${num * i}`);
// }

// ------------Q.12--------------

// let i = 1;
// let sum = 2;

// while(i <= 50){
//     sum = sum + i;
//     i++;
// }
// console.log("Sum of first 50 numbers: " + sum);

// -----------Q.13-------------

// let num = 5;
// let factorial = 1;

// for(let i = 1; i<=num; i++){
//     factorial = factorial * i;
// }
// console.log("Factorial = " + factorial);

// -------------Q.14----------

// let num = 1234;
// let reverse = 0;

// while(num > 0){
//     let digit = num % 10;
//     reverse = reverse * 10 + digit;
//     num = Math.floor(num / 10);
// }

// console.log("Reverse Number = "+ reverse);

// let reverse = Number(num.toString().split("").reverse().join(""));
// console.log("Reverse Number = " + reverse);

// --------------Q.15-------------


// let i = 3;

// do {
//     console.log(i);
//     i += 2;
// } while (i <= 20);

// ----------Q.16------------


// let num = 4;

// function isPrime(num) {
//     if (num <= 1) {
//         return false;
//     }

//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) {
//             return false;
//         }
//     }

//     return true;
// }

// if (isPrime(num)) {
//     console.log("Prime Number");
// } else {
//     console.log("Not a Prime Number");
// }

// -------------Q.17-------------


// let sumArray = function(arr) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }

//     return sum;
// };

// let numbers = [10, 20, 30, 40, 50];

// console.log("Sum = " + sumArray(numbers));

// ------------Q.18---------------

// const fibonacci = ()=>{
//     let a =0, b =1;

//     for(let i =1; i <=10; i++){
//         console.log(a);

//         let c = a+b;
//         a = b;
//         b = c;
//     }

// };

// fibonacci();

// -------------Q.19--------------

// function calculategrade(Marks){

//     if(Marks >=90){
//         console.log("Grade A");
//     }else if(Marks >= 75){
//         console.log("Grade B");
//     }else if(Marks >= 50){
//         console.log("Grade C");
//     }else{
//         console.log("Fail");
//     }

// }

// console.log("Student 1: ", calculategrade(95));
// console.log("Student 2: ", calculategrade(80));
// console.log("Student 3: ", calculategrade(65));
// console.log("Student 4: ", calculategrade(30));

// --------------Q.20--------------

// let arr = [10, 20, 30 ,40, 50];

// let max = arr[0];
// let sum = 0;

// for(let i = 0; i < arr.length; i++){

// if(arr[i] > max){
//     max = arr[i];
// }

// sum +=arr[i];

// }

// console.log("Maximum Number: ", max);
// console.log("Sum of Elements: ", sum);

// console.log("Reverse Array:");

// for(let i = arr.length - 1; i>=0; i--){
//     console.log(arr[i]);
// }