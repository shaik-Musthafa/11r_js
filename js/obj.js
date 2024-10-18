// ASSIGNMENT 
// DATE: 26/08/2024 

// 1.Use Object.keys() and Object.values() to create a new object with only the keys and  values that meet a certain condition. 
// Code: 
let obj1 = { a: 1, b: 2, c: 3, d: 4 }; 
let output={}; 
for(i in obj1){ 
if(obj1[i]>2){ 
console.log(`${i}:${obj1[i]}`); 
} 
} 
// Output: 
// c:3 
// d:4 
// 2:Use Object.assign() to merge two objects and create a new object with the combined  properties. 
// Code: 
const obj1 = { a: 1, b: 2 }; 
const obj2 = { c: 3, d: 4 }; 
Object.assign(obj1,obj2); 
console.log(obj1); 
// output: { a: 1, b: 2, c: 3, d: 4 } 
// 3.Use Array.reduce() to sum up the values of an object's properties. Code: 
const obj = { a: 1, b: 2, c: 3, d: 4 };
let valarr=Object.values(obj); 
let sum=valarr.reduce((total,a)=>total+a,0); 
console.log(sum); 
// output: 10 
// 4. scenario explained for array of objects using hasownproperty. Code: 
let arr=[{name:"a",id:"133"},{name:"b",DOB:"sep 24"},{id:"667", role:"developer"}]; console.log("To check if array of objects has property name in them"); for(i of arr){ 
console.log(i.hasOwnProperty("name")); 
} 
// Output: 
// To check if array of objects has property name in them 
true 
true 
false
