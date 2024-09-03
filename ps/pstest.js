// let age =18
// if(age){
//     console.log("you are eligible to vote. ")
// }if(age>=18){
//     console.log("you are eligible to vote")
// }else{
//     console.log("you are not eligible for vote")
// }
// let marks =75
// if(marks>=90){
//     console.log("Grade A")
// }else if(marks<80){
//     console.log("Grade B")
// }else if(marks==70){
//     console.log("Grade c");
// }else{
//     console.log("Needs Improvement")
// }
// let loginstatus = true
// let accountBalance = 500
// if(loginstatus){
//     if(accountBalance>0){
//         console.log("you can make a purchase");
//     }
//     else{
//         console.log("Insufficient Balance")
//     }
// }else{
//     console.log("Please log in to continue");   
// }
// let j = 0
// do{
    // console.log(`Number ${j}`)
    // j++
// }while(j<5 && j++)
// let dayOff = false
// let holiday =true
// if(dayOff||holiday){
//     console.log("you can relax today");
// }else{
//     console.log("It's a working day ");   
// }
// for (let i=0;i<10;i++){
//     if(i===2*i){
//         break
//     }
//     console.log(`Number${i}`);
// }
// for(let i=1;i<=3;i++){
//     for(let j=1;j<=3;j++){
//         if(i<2)
//             console.log(`i=${i},j=${j}`);
//     }
// }
// for(i=5;i>=0;i=i-2){
//     console.log(`Countdown:${i}`);
// }
// let count =0 
// while(true){
//     count++
//     console.log(`Count: ${count}`);
//     if(count===5)
//         break
// }
let Grade = 'B'
switch(Grade){
    case'A':
    case'B':
    case'C':
    console.log("you passed!");
    break
    default:
        console.log("you failed");
}