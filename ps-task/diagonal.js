// input:
// 1 2 3
// 4 5 3
// 2 5 3
// output:
// 1) Print the diagonal elements side by side:
// Diagonal elements are: 1 5 3 3 5 2
rows=+prompt("enetr a Number: ")
cols=+prompt("enter a Number: ")
matrix=[],sum=0,all=[],all1=[]
for(i=1;i<=rows;i++){
x=[]
for(j=1;j<=cols;j++){
console.log("enter"+i+""+j+"elements")
ele=+prompt()
x.push(ele)
}
matrix.push(x)
}
console.log(matrix)
for(i of matrix){
console.log(i.join(" "))
}
for(i=0;i<matrix.length;i++){
left_dia="",right_dia=" "
for(j=0;j<matrix[i].length;j++){
if(i==j){
left_dia+=matrix[i][j]+" "
}
if(i+j==rows-1){
right_dia+=matrix[i][j]+""
}
}
all1+=right_dia+""
all=all+left_dia
}
console.log("Diagonal elements are: "+all+all1.trim())
// Print the Outer layer elements side by side
//Outer layer elements: 1 2 3 4 3 2 5 3
rows=+prompt("enetr a Number: ")
cols=+prompt("enter a Number: ")
matrix=[],sum=0,outre_layer=[]
for(i=1;i<=rows;i++){
x=[]
for(j=1;j<=cols;j++){
console.log("enter"+i+""+j+"elements")
ele=+prompt()
x.push(ele)
}
matrix.push(x)
}
console.log(matrix)
let all=""
for(i of matrix){
console.log(i.join(" "))
}
for(i=0;i<matrix.length;i++){
res="",dia=" "
for(j=0;j<matrix[i].length;j++){
if(i==0||i==rows-1||j==0||j==cols-1){
res+=matrix[i][j]+" "
}
}
all=all+res
}
console.log("Outer layer elements are: "+all)
