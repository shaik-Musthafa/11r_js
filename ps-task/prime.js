// sum of prime nums
number=prompt("enter a num: ")
primesum=0
for(num of number){
if (num>1){
    count=0
    for(i=2;i<num;i++){
        if(num%i==0){
            count++
            break
        }
    }if(count==0){
        primesum+=Number(num)
    }
}
}
console.log(primesum)
// to check whether a number is prime or not
num = +prompt("enter a numb: ")
prime = true
if(num>1){
for(i=2;i<num;i++){
    if (num%i==0){
        console.log("not a prime")
        prime = false
        break
    }
}if(prime==true){
    console.log("prime")
}
}else{
    console.log("enter a valid num")
}
//to check prime is bigger or non-prime is bigger
//WAP to check whether prime sum is bigger or non prime sum is bigger
number=prompt("enter a num: ")
primesum=0
nonprimesum=0
for(num of number){
if (num>1){
    count=0
    for(i=2;i<num;i++){
        if(num%i==0){
            nonprimesum+=Number(num)
            count++
            break
        }
    }if(count==0){
        primesum+=Number(num)
    }
}
}if(primesum>nonprimesum){
    console.log("prime is bigger")
}else{
    console.log("non-prime is bigger")
}