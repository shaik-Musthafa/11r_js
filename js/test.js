//conditional statements
//write a program to check if a num is even or odd
// let num = 99
// if(num%2==0){
//     console.log("it is an even number")
// }else{
//     console.log("it is an odd number");
    
// }
//write a program to find the largest number among three nums
// let a =10
// let b = 13
// let c = 17
// if(a>b && a>c){
//     console.log("a is greater");
// }else if(b>a && b>c){
//     console.log("b is greater");
// }else{
//     console.log("c is greater");
// }
//write a program to determime if a person is eligible to vote based on their age.
// let x = 20;let age=18
// if(x<age){
//     console.log("minor not eligible for voting");
// } else{
//     console.log("eligible for voting");
    
// }
//(OR)
// if(x<18) {
//     console.log("you are not eligible for voting");
// }else if(x==age||x>age){
//     console.log("you are eligible for voting");
// } 

//write program to implement a simple calculator
// let x =10
// let y = 2
// let z=  "/";// here we need to change the operator
// if(z=="+"){
//     console.log(x+y);
// }else if(z=="-"){
//     console.log(x-y);
    
// }else if(z=="*"){
//     console.log(x*y);
// }else if(z=="%"){
//     console.log(x%y)
// }else if(z=="/"){
//     console.log(x/y);
// }
//Loops
// //write a program to find sum of all even num b/w 1 -100
// // let x = 100
// let sum =0
// for (i=1;i<=100;i++){
//     if(i%2==0){
//         sum=sum+i
//     }
// }console.log(`sum of all even nums ${sum}`);
//write a program to print multiplication table of a given number
// let x=13
// for(i=1;i<=10;i++){
//     console.log(`${x}x${i} = ${x*i}`);
// }
//write a program to. check if a number is prime or not
// let x=23;
// if(x>1){
//     prime=true
// for (i=2;i<x;i++){
//     if(x%i==0){
//         console.log("not a prime");
//         prime=false
//         break
//     }
// }if(prime==true){
//     console.log("prime num");
    
// }
// }
//Functions
//write a program to find the maximum element in an array
let arr=[1,10,34,43,55,4]
function array(){
    let arr1=Math.max(...arr)
    console.log(arr1);
    
}array()
//write a function to reverse a string
function reverse(str){
    let reversed="";
    for(i=str.length-1;i>=0;i--){
        reversed+=str[i]
    }return reversed
}
let str1="wdcc"
let str2="meow"
console.log(reverse(str1))
console.log(reverse(str2))
//write a function to calculate the factrial of a number recursively
function factorial(x){
    let j=1
    for(i=1;i<=x;i++){
        j=j*i
    }return j
}console.log(factorial(11));
