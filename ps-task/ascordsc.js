// ASSIGNMENT                      TASK: 
// 1) input: [23, 33, 200, 785] 
// output: 30 
// code: 
let input=[23, 33, 200, 785]; 
let uni=""; 
let dup=""; 
for(i of input){ 
let emp=[]; 
let str=String(i).split("").map(Number); 
for(j of str){ 
if(!emp.includes(j)){ 
emp.push(j) 
} 
} 
for(m of emp){ 
let c=0; 
for(n of str){ 
if(m==n){ 
c++; 
} 
} 
if(c==1){ 
uni=uni+m+""; 
}
else{ 
dup=dup+m+""; 
} 
} 
} 
console.log(dup) 
// output: 
// 30 
// 2) input: [ 538, 111, 200, 652] 
// Code: 
let input=[538, 111, 200, 652]; 
let output=[]; 
for(i of input){ 
let str=String(i); 
c=0; 
for(j=0;j<str.length-1;j++){ 
if(str[j+1]<str[j]){ 
c++; 
} 
} 
output.push(str.length-1==c) 
} 
console.log(output); 
// output: 
// [ false, false, false, true ] 
// 3) WAP to print uniques and duplicates without using includes method input: 112 
// code: 
let input = "112"; 
let uniques = []; 
let duplicates = []; 
for (let i = 0; i < input.length; i++) { let isDuplicate = false; 
for (let j = 0; j < uniques.length; j++) { if (uniques[j] === input[i]) { 
isDuplicate = true; 
break; 
} 
} 
if (isDuplicate) { 
let x = false; 
for (let k = 0; k < duplicates.length; k++) { if (duplicates[k] === input[i]) { 
x = true; 
break; 
} 
} 
if (!x) { 
duplicates.push(input[i]); 
} 
} else { 
uniques.push(input[i]); 
} 
} 
console.log("Uniques:", uniques.join('')); console.log("Duplicates:", duplicates.join('')); output: Uniques: 12 
// Duplicates: 1
