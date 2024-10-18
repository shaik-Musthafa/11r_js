//do while loop:
// print numbers in reverse order:
let s4 = 10;
do{
    console.log(s4);
    s4--;
}while(s4>=1);
// output : 18

//to find product of of all numbers from 1 to 12
let s5 = 1;
let product = 1;
do{
    product *= s5
    s5++;
}while(s5<=12);
console.log(product)
//output : 15

// to print reverse order from 20 to 1
let s6 = 20;
do{
    console.log(s6);
    s6 = s6-2;   
}
while(s6>=1);
//output : 12

//while loop :

// print 1 to 20 and skips divisible by 5
let s7 = 1;
while(s7<=20){
    if((s7%5 != 0)){
        console.log(s7);
    }
    s7++;
}
// output : 9

// printing the sum of numbers from 1 to 30 divisible by 4
let s8 = 0;
let sum = 0;
while(s8<=30){
    if(s8%4 == 0){
       sum += s8;   
    }
    s8++; 
}
console.log(sum);
//output: 6

// printing numbers from 50 to 1
let s9 = 50;
while(s9>=1){
    if(s9%3 == 0){
        console.log(s9)
    }
    s9--;
    
}
//output : 3

