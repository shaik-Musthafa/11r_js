// JS ASSIGNMENT 
// task: 
// Map 
// 1. Double the numbers in an array: [1, 2, 3, 4, 5] → [2, 4, 6, 8, 10] Code: 
let arr=[1,2,3,4,5]; 
let res=arr.map((a,b,c)=>a*2); 
console.log(res); 
output: [2, 4, 6, 8, 10] 
// 2. Convert strings to uppercase: ["hello", "world"] → ["HELLO", "WORLD"] Code: 
let arr1=["hello","world"]; 
let s=arr1.map((a,b,c)=>a.toUpperCase()); 
console.log(s); 
// output: ["HELLO", "WORLD"] 
// Filter 
// 1. Get even numbers from an array: [1, 2, 3, 4, 5] → [2, 4] Code: 
let arr2=[1,2,3,4,5]; 
let result1=arr2.filter((a,b,c)=>a%2==0); 
console.log(result1); 
// output: [2, 4]
// 2. Get strings longer than or equal to 5 characters: ["hello", "world", "abc"] → ["hello", "world"] Code: 
let arr3=["hello","world","abc"]; 
let result2=arr3.filter((a,b,c)=>a.length>=5); 
console.log(result2); 
// output: ["hello", "world"] 
// ForEach 
// 1. Log each number in an array: [1, 2, 3, 4, 5] → console logs each number Code: 
let arr4=[1,2,3,4,5]; 
let x1=arr.forEach((a,b,c)=>console.log(a)); 
// output:  
// 1 
// 2 
// 3 
// 4 
// 5 
// 2. Append "!" to each string in an array: ["hello", "world"] → ["hello!", "world!"] Code: 
let arr5=["hello","world"]; 
arr.forEach((a,b,c)=>console.log(a+"!")); 
// output: ["hello!", "world!"] 
// Every 
// 1. Check if all numbers in an array are positive: [1, 2, 3, 4, 5] → true 
// Code: 
let arr6=[1,2,3,4,5]; 
let r=arr6.every((a,b,c)=>a>0);
console.log(r); 
// output: true 
// 2. Check if all strings in an array are longer than 5 characters: ["hello", "world", "abc"] → false Code: 
let arr7=["hello","world","abc"]; 
let res2=arr7.every((a,b,c)=>a.length>5); 
console.log(res2); 
// output: false 
// Some 
// 1. Check if any number in an array is even: [1, 2, 3, 4, 5] → true 
Code: let dod=[1,2,3,4,5]; 
let even=dod.some((a,b,c)=>a%2==0) 
console.log(even) 
// output: true 
// 2. Check if any string in an array contains "x": ["hello", "world", "max"] → true Code: 
let str1=["hello","world","max"]; 
let x2=str.some((a,b,c)=>a.includes("x")); 
console.log(x2); 
// output: true 
// Find 
// 1. Find the first even number in an array: [1, 2, 3, 4, 5] → 2 
// Code: 
let input1=[1,2,3,4,5]; 
let evennum=input.find((a)=>a%2==0); 
console.log(evennum); 
output: 
2
// 2. Find the first string in an array that contains "x": ["hello", "world", "max"] → "max" Code: 
let str=["hello","world","max"]; 
let x=str.find((a)=>a.includes("x")); 
console.log(x); 
output: max 
FindIndex 
// 1. Find the index of the first even number in an array: [1, 2, 3, 4, 5] → 1 Code: 
let input=[1,2,3,4,5]; 
let evennum=input.findIndex((a)=>a%2==0); 
console.log(evennum); 
output: 
// 1 
// 2. Find the index of the first string in an array that contains "x": ["hello", "world", "max"] → 2 Code: 
let str=["hello","world","max"]; 
let x=str.findIndex((a)=>a.includes("x")); 
console.log(x) 
output: 2
