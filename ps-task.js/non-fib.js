//  WAP to print the non fib numbers by using while loop.
num =+prompt("enter a num: ")
a=0,b=1,nonfib=0
while(nonfib!=num){
    for(i=a+1;i<b;i++){
        console.log(i)
        nonfib++
        if(nonfib==num){
            break
        }
    }
    c=a+b
    a=b
    b=c
}
// WAP to print nth non-fib number.
// Input: Enter a number: 10
// Output: 16
num =+prompt("enter a num: ")
a=0,b=1,nonfib=0,nthnfib=null
while(nonfib!=num){
    for(i=a+1;i<b;i++){
         nonfib++
        if(nonfib==num){
            nthnfib=i
            break
        }
    }
    c=a+b
    a=b
    b=c
    if(nthnfib!==null){
        break
    }
}
console.log(nthnfib)
//WAP to print the below series based on the input
//input: Enter a number: 13
//output: 4 6 7 9 10 11 12.
let num = +prompt("Enter a number: ");
let a = 0, b = 1;
while (true) {
    for (let i = a + 1; i < b; i++) {
        if (i >= num) { 
            break;
        }
        console.log(i);
    }
    let c = a + b;
    a = b;
    b = c;
    if (a >= num) { 
        break;
    }
}
