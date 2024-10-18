// WAP to print the nth Fibonacci number based on the user input
num =+prompt("enter fib position: ")
a=0,b=1,i=1
while(i<=num){
    if(i==num){
        console.log(a)
        break
    }c=a+b
    a=b
    b=c
    i++
}
//WAP to print the reverse of a number
num=prompt("enter a num: ")
rev=""
if(num[0]=="-"){
    for(i=num.length-1;i>=1;i--){
        rev=rev+num[i]
    }
    rev="-"+rev
    console.log(Number(rev))
}else{
    for(i=num.length-1;i>=0;i--){
        rev+=num[i]
    }console.log(Number(rev))
}
// WAP to print the Fibonacci series based on the user input
num=prompt("enter a fib: ")
a=0,b=1
while(a<num){
    console.log(a)
    c=a+b
    a=b
    b=c
}