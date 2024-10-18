// Problems on Patterns
// Date:18/09/2024
rows=+prompt("enter the num: ")
for(i=1;i<=rows;i++){
res=""
for(j=1;j<=i;j++){
if(j==1||i==j||i==rows)
res+=j+" "
else
res+="  "
}
console.log(res)
}
Output:
// enter the num: 5
// 1 
// 1 2 
// 1   3 
// 1     4 
// 1 2 3 4 5 


rows=prompt("enter the num: ")
for(i=rows;i>=1;i--){
res=""
for(j=i;j>=1;j--){
if(j==1||i==j||i==rows)
res=res+(rows-j+1)+" "
else
res+=" "
}
console.log(res)
}
// Output:
// enter the num: 5
// 1 2 3 4 5 
// 2     5 
// 3   5 
// 4 5 
// 5 


