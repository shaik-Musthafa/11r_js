// let user = "employee"
// if (user =="admin"){
//     console.log("logged in as admin")
// }else if(user =="employee"){
//     console.log("logged in as employee")
// } else if(user =="super_user"){
//     console.log("logged in as super_user")
// } else if(user == "unauthorized user"){
//     console.log("unauthorized user");   
// }
// let user = 1;
// let user2 = 2;
// if (user==user2){
//     console.log("logged in as admin")
// } else if(user<=user2){
//     console.log("logged in as employee")
// } else if(user>=user2){
//     console.log("logged in as super_user")
// } else if(user!=user2){
//     console.log("unauthorized user")
// }
// for(i=40; i<=50; i++){
//     if(i%2==0)
//     console.log(`40 *${i-40} =${40*(i-40)}`)
// }
// for(i=1;i<=20; i++){
//     if(i%2==0 && i%3==0){
//         console.log(`${i} fizzbuzz`)
    // }
    // else if(i%2==0){
    //     console.log(`${i} fizz`)
    // }
    // else if(i%3==0){
    //     console.log(`${i} buzz`)
    // }
    // else if(i%2!=0 || i%3!=0){
    //     console.log(`${i} danger`)
    // }
    // else{
    // console.log(`${i}sleep`)
    // }
// }
// loops practise ques
// 1. calculate the all eve nums from 1 -100 test case-1 sum of all even nums from 1-100 is 2550 & t-c 2 sum of all even nums from 1-50 is 650
let j=0 ;
for(i=1; i<=100; i=i+1){
    if(i%2==0){
        // console.log(i);
        j= j+i;
    }
}
console.log(`sum of all  even numbers are ${j}`);  
// for(i=1; i<=50; i++){
//     if(i%2==0){
//         j =j+i
//     }
// }
// console.log(`sum of even nums b/w 1-50:-${j}`);
//2. write a program to find the factorial of given number, tc-1 i/p 5, expected o/p 120. tc-2 i/p 3 , o/p is 6
// let j =1;
// for(i=1; i<=5; i++){
//     j=j*i;
// }
// console.log(`factorial of 5 is ${j}`);
// let p= 1
// for(i=1; i<=3; i++){
//     p=p*i;
// }
// console.log(`factorial of 3 is ${p}`);
//deteremine the number  of digits in a given number tc-1 i/p 123, expected o/p-3 , tc-2 4567 expected o/p : 4
// let j= [1,2,3]
// let p=[4,5,6,7]
// console.log(j.length,p.length)
// else if- ladder
//1. write a program to determine the fare for a taxi ride based on the distance travelled(0-5:$5,5-10:$10,10-20$20, above 20 $30 and for every additional km )
// 
// Write a program to determine the discount on a product based on the quantity purchased(1-5 units: no discount,6-10:5% discount,11-20: 10% discount, above 20units -15%discount)
// let x= 0;
// if(x>=1 && x<=5){
//     console.log(`no discount is available`);
// }else if(x>5 && x<=10){
//     console.log(`5% discount is available`);
// } else if(x>10 && x<20){
//     console.log(`10% discount is available`);
// } else if(x>=20){
//     console.log(`15% discount is available`);
// }
// else{
//     console.log('discount is not available on the selected item');  
// }
// ------- //
// switch statement
//1. write a program to determine the type of coffee based on the user's selection(1:espresso, 2:cappuccino, 3:latte, 4:Mocha)
// let value=4;
// switch (value){
//     case 1:
//         console.log(`you have selected espresso`);
//         break;
//     case 2:
//         console.log(`you have selected cappuccino`);
//         break;
//     case 3:
//         console.log(`you have selected latte`);
//         break;
//     case 4:
//         console.log('you have selected Mocha')
//         break;
//     default:
//         console.log(`you have selected invalid option`);
//         break;
// }
//2. Write a program to determine the shiping cost based on the region(1:North America($10), 2:south America($20), 3:Europe($30)), 4:asia($40)),5:Australia($50)))
// let cost= 4;
// switch(cost){
//     case 1:
//         console.log(`shipping cost for North America is $10`);
//         break;
//     case 2:
//         console.log(`shipping cost for South America is $10`)
//         break;
//     case 3:
//         console.log(`shipping cost fro Europe is $ 30`);
//         break;
//     case 4:
//         console.log(`shipping cost for Asia is $10`);
//         break;
//     case 5:
//         console.log(`shipping cost for Australia is $10`);
//         break;
//     default:
//         console.log("invalid shipping address")
// }