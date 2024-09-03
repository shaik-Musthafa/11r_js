//1.WAP to print 10 to 1 without using >= operator
// for(i=10;!(i<=0);i--){
//     console.log(i)
// }
//2.WAP to print -1 to -10 without using >= operator
// for(i=-1;!(i<=-10-1);i--){
//     console.log(i)
// }
//3. WAP tp print -10 to -1 without using <= operator
// for(i=-10;!(i>=0);i++){
//     console.log(i)
// }

// let a ="hello"
// for(i=a;i<=5;i++){
//     console.log(a-1)
// }
//--- 12/09/24 task-1---//
//Conditional statements recap, largest number among three numbers using ternary operator,
//  For loop printing 1 to 10, 10 to 1.. by using different operators
// let a = 10
// let b = 50
// let c = 99
// let largest= (a>b && a>c)? "a is largest": ((b>c)? "b is largest": "c is largest ")
// console.log(largest);
// for (i=1;!(i>10);i++){
//     console.log(i);
// }
// for(i=10;!(i<1);i--){
//     console.log(i);
    
// }
// factorial
// num = prompt("enter a number: ")
// fact=1,res=""
// for(i=1;i<num;i++){
//     fact=fact*1;
//     if(i<num){
//         res=res+i+"*"
//     } else{
//         res=res+i+" = "
//     }
// }
// console.log(res+fact);
//-----
//prime num
// num = +prompt("enter a numb: ")
// prime = true
// if(num>1){
// for(i=2;i<num;i++){
//     if (num%i==0){
//         console.log("not a prime")
//         prime = false
//         break
//     }
// }if(prime==true){
//     console.log("prime")
// }
// }else{
//     console.log("enter a valid num")
// }
// sum of prime nums
// number=prompt("enter a. num: ")
// primesum=0
// for(num of number){
// if (num>1){
//     count=0
//     for(i=2;i<num;i++){
//         if(num%i==0){
//             count++
//             break
//         }
//     }if(count==0){
//         primesum+=Number(num)
//     }
// }
// }
// console.log(primesum)
//// num = +prompt("enter a numb: ")
// prime = true
// if(num>1){
// for(i=2;i<num;i++){
//     if (num%i==0){
//         console.log("not a prime")
//         prime = false
//         break
//     }
// }if(prime==true){
//     console.log("prime")
// }
// }else{
//     console.log("enter a valid num")
// }
// number=prompt("enter a. num: ")
// primesum=0
// for(num of number){
// if (num>1){
//     count=0
//     for(i=2;i<num;i++){
//         if(num%i==0){
//             count++
//             break
//         }
//     }if(count==0){
//         primesum+=Number(num)
//     }
// }
// }
// console.log(primesum)
// number=prompt("enter a. num: ")
// primesum=0
// nonprimesum=0
// for(num of number){
// if (num>1){
//     count=0
//     for(i=2;i<num;i++){
//         if(num%i==0){
//             nonprimesum+=Number(num)
//             count++
//             break
//         }
//     }if(count==0){
//         primesum+=Number(num)
//     }
// }
// }
// console.log(primesum) 
// console.log(`sum of prime is${primesum} & sum of nonprime is${nonprimesum}`)
//to check whether prime num is bigger or non-prme is bigger
// number=prompt("enter a. num: ")
// primesum=0
// nonprimesum=0
// for(num of number){
// if (num>1){
//     count=0
//     for(i=2;i<num;i++){
//         if(num%i==0){
//             nonprimesum+=Number(num)
//             count++
//             break
//         }
//     }if(count==0){
//         primesum+=Number(num)
//     }
// }
// }if(primesum>nonprimesum){
//     console.log("prime is bigger")
// }else{
//     console.log("non-prime is bigger")
// }
// let arr=[0,1,2,3,4,5,6,"hewt","ewgewr","Ewgerw"]
// for(i in arr){
// }    console.log(arr)
//----26/09/24
// arr =prompt("enter a number: ").split("").map(Number)
// emp=[],uni="",dup=""
// for(i of arr){
//     if(!emp.includes(i)){
//         emp.push(i)
//     }
// }
// console.log(emp)
// for(i of emp){
//     c=0
//     for(j of arr){
//         if(i==j){
//             c++
//         }
//     }if(c==1){
//         uni=uni+i+""
//     }else{
//         dup=dup+i+""
//     }
// }
// console.log(`unique values are${uni}`)
// console.log(`duplicate values are${dup}`)
