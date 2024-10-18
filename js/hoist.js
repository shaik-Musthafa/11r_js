// 1. Check given string is palindrome or not? Code: 
function palin(x){ 
let sum=""; 
let y=""; 
for(let i=x.length-1;i>=0;i--){ 
sum=sum+x[i]; 
} 
y=sum; 
if(x==y){ 
console.log("It is palindrome"); 
} 
else{ 
console.log("Not a palindrome"); 
} 
} 
palin("OhhO"); 
palin("hello"); 
palin("abbba"); 
// output: 
// It is palindrome 
// Not a palindrome 
// It is palindrome
// 2. For a given string if the character is in uppercase convert it to lowercase  and vice verse for all of the characters in the string? 
// Code: 
function convert(n){ 
let final=""; 
for(i of n){ 
if(i==i.toLowerCase()){ 
final=final+i.toUpperCase(); 
} 
else{ 
final=final+i.toLowerCase(); 
} 
} 
console.log(final); 
} 
convert("somEThinG"); 
// output: 
SOMetHINg

