// for(i=10;i>0;i= i-3){
//     console.log(i);
// }
//debugger it is used to watch the step by step execution of code
// debugger;
// for(i=0;i<=5;i++){
//     console.log(i);
// }
// for(i=1;i<=100;i++){
//     console.log(i);
// }
// function even(){
//     for(i=0;i<=100;i++){
//         if(i%2==0){
//         console.log(i)
//     }
// }
// }
// even()
// let j=0 ;
// function even(){
//     for(i=1; i<=100; i=i+1){
//         if(i%2==0){
//             console.log(i);
//             j= j+i;
//         }
//     }
//     console.log(`sum of all even nums from 1-100  are :${j}`)
// }
// even()
// let j= 0;
// for(i=1,j=11;i<=10 && j<10;i++,j++){
//     console.log(i,j);
// }
// function table(x,y){
//     for(i=1;i<=5;i++){
//         console.log(`${x} * ${i} = ${x*i}`  , `    ${y} *${i} = ${y*i}`);
        
//     }
// }
// table(3,4)
function factorial(x){
let j= 1;
for(i=1;i<=x;i++){
    j= j*i
}
console.log(`factorial of entered value is:${j}`)
}
factorial(4)  