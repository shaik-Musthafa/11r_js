// Implement problems which we have done (atleast 5) using  named and arrow functions. 
// Named Functions Programs 
// 1. Factorial Program using Named function. 
// Program: 
function factorial(n){ 
let num=n; 
let res=1; 
while(num>0){ 
res=res*num; 
num=num-1; 
} 
console.log(`factorial of ${n} is:${res}`) 
} 
factorial(1); 
factorial(2); 
factorial(3); 
factorial(4); 
factorial(5); 
factorial(6); 
// output: 
// factorial of 1 is:1 
// factorial of 2 is:2 
// factorial of 3 is:6
// factorial of 4 is:24 
// factorial of 5 is:120 
// factorial of 6 is:720 
// 2. Program to print no.of digits of given number using named function Program: 
function digits(n){ 
let c=0; 
if(n==0){ 
console.log("length is 0"); 
} 
else{ 
while(n>0){ 
n=Math.floor(n/10); 
c=c+1; 
} 
console.log("Length of number is: "+c); 
} 
} 
digits(2); 
digits(10); 
digits(264); 
digits(2001); 
// output:  
// Length of number is: 1 
// Length of number is: 2 
// Length of number is: 3 
// Length of number is: 4
// 3. Program to print total amount along with gst using named functions Program : 
function tax(n1,n2,gst=5){ 
let total=n1+n2; 
let tax=total*(gst/100); 
let total_amount=total+tax; 
console.log(`for ${n1} , ${n2} with added gst, total is: ${total_amount}`) } 
tax(20,25); 
tax(100,200); 
// output:  
// for 20 , 25 with added gst, total is: 47.25 
// for 100 , 200 with added gst, total is: 315 
// 4. program to print sum of all even number in a given range using named  function. 
// Program 
function sum(start,end){ 
let summ=0; 
for(start; start<=end; start++){ 
if(start%2==0){ 
summ+=start; 
} 
} 
console.log(`sum of all even numbers is: ${summ}`) 
}
sum(1,100); 
sum(1,50); 
// output : 
// sum of all even numbers is: 2550 
// sum of all even numbers is: 650 
// 5. program to print 10 to 1 in reverse order using named function Program: 
function dowhile(n){ 
console.log("Series of numbers is:"); 
while(n>0){ 
console.log(n); 
n=n-1; 
} 
} 
dowhile(10); 
// output: 
// Series of numbers is: 
// 10 
// 9 
// 8 
// 7 
// 6 
// 5 
// 4 
// 3 
// 2 
// 1
// Arrow Functions Programs 
// 1. Program to print area of rectangle using arrow function Program: 
const a=(l,b)=>{ 
let area=l*b; 
console.log(`Area of rectangle with ${l} & ${b} is :${area}`) 
} 
a(10,5); 
// output: 
// Area of rectangle with 10 & 5 is :50 
// 2. Volume of Sphere using arrow function. 
// Program: 
const x=(r,pie=3.14)=>{ 
let volume=(4/3)*pie*r**3; 
console.log(`Volume of sphere with radius ${r} is:${volume}`); 
} 
x(10); 
// output: 
// Volume of sphere with radius 10 is:4186.666666666667 
// 3. Split and mention vowel and consonant characters in given string using  arrow function 
// Program: 
const ans=(nam)=>{ 
let na=nam.toLowerCase();
let arr=na.split(""); 
for(let i=0;i<arr.length;i++){ 
if(arr[i]=="a"||arr[i]=="e"||arr[i]=="i"||arr[i]=="o"||arr[i]=="u"){ console.log(arr[i],"is vowel in string"); 
} 
else{ 
console.log(arr[i],"is consonent in the string"); 
} 
} 
} 
ans("DoomsDay"); 
// output:  
// d is consonent in the string 
// o is vowel in string 
// o is vowel in string 
// m is consonent in the string 
// s is consonent in the string 
// d is consonent in the string 
// a is vowel in string 
// y is consonent in the string 
// 4. Check number is palindrome or not using arrow function Program: 
const palin=(n)=>{ 
let num=n; 
let res=0; 
let reminder=0;
while(n>0){ 
reminder=n%10; 
res=(res*10)+reminder; 
n=Math.floor(n/10); 
} 
if(num==res){ 
console.log(`${num} is a palindrome`); 
} 
else{ 
console.log(`${num} is not a plaindrome`); 
} 
} 
palin(1221); 
palin(1000); 
palin(9999); 
// output: 
// 1221 is a palindrome 
// 1000 is not a plaindrome 
// 9999 is a palindrome 
// 5. Swap two numbers without using Temporary variable and use arrow  function 
// Program: 
const swap=(a,b)=>{ 
let i=a; 
let j=b; 
a=a^b;
b=a^b; 
a=a^b; 
console.log(`Swap of ${i},${j} is ${a},${b}`); 
} 
swap(10,20); 
swap(1,2); 
swap(99,100); 
// output:  
// Swap of 10,20 is 20,10 
// Swap of 1,2 is 2,1 
// Swap of 99,100 is 100,99

