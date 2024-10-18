// 1. INPUT: 1214
// OUTPUT:
// Uniques are: 2 4
// Dublicate is : 1
arr=prompt("enter a number:").split("").map(Number)
emp=[],uni=[],dup="",uniqe_nums=[],dup_nums=[]
for(i of arr){
if(!emp.includes(i)){
emp.push(i)
}
}
for(i of emp){
c=0
for(j of arr){
if(i==j)
c++
}
if(c==1){
uni+=i+" "
}
else{
dup+=i+" "
}
}
if(uni.length==2){
console.log("Unique is "+uni)
}
else{
console.log("Uniques are "+uni)
}
if(dup.length==2){
console.log("Duplicate is "+dup)
}
else{
console.log("duplicates are"+dup)
}
// 2. Input : 2788
// output:
// 2-> 1
// 7-> 1
// 8-> 2
num=prompt("enter a number:").split("").map(Number)
emp=[],uniq="",dup=""
for(i of num){
if(!emp.includes(i)){
emp.push(i)
}
}
for(i of emp){
c=0
for(j of num){
if(i==j){
c++
}
}
if(c==1){
console.log(`${i} -> ${c}`)
}
else{
console.log(`${i} -> ${c}`)
}
}