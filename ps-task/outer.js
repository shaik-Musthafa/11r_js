// WAP to print  the sum of outer layers in the matrix
// 2 3 4
// 3 4 2
// 3 4 1
rows=+prompt("enetr a Number: ")
cols=+prompt("enter a Number: ")
matrix=[],sum=0
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
for(j=0;j<matrix[i].length;j++){
if(i==0||i==rows-1||j==0||j==cols-1){
sum+=matrix[i][j]
}
}
}
console.log(sum)
// WAP to print the sum of diagonal elements in the matrix
// output: 2+4+1+4+4 (sum)
rows=+prompt("enetr a Number: ")
cols=+prompt("enter a Number: ")
matrix=[],sum=0
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
for(j=0;j<matrix[i].length;j++){
if(i==j||i+j==rows-1){
sum+=matrix[i][j]
}
}
}
console.log(sum)