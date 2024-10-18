// WAP to print number of pairs formed by the array of numbers
// input: 10 20 10 30 20 20 o/p:2
num=prompt("enter nums: ").split(" ").map(Number)
emp={},sum=0
for(i of num){
emp[i]=(emp[i]||0)+1
if(emp[i]==2){
sum++
emp[i]=0
}
}
console.log(sum)